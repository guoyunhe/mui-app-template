import { Container, List, Pagination, Typography } from '@mui/material';
import xior from 'xior';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import PaginatedResult from '~/types/PaginatedResult';
import User from '~/types/models/User';
import UserCard from './UserCard';

export default function AdminUserListPage() {
  const { t } = useTranslation('admin');
  const [searchParams, setSearchParams] = useSearchParams({ page: '1', perPage: '10' });
  const [total, setTotal] = useState(0);
  const [users, setUsers] = useState<User[]>([]);

  const reload = () => {
    xior
      .get<PaginatedResult<User>>('/admin/users', {
        params: {
          page: searchParams.get('page'),
        },
      })
      .then((res) => {
        setTotal(res.data.meta.total);
        setUsers(res.data.data);
      });
  };

  useEffect(() => {
    reload();
  }, [searchParams]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h1" my={3}>
        {t('User Management')}
      </Typography>
      <List>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={() => {
              reload();
            }}
          />
        ))}
      </List>
      <Pagination
        page={Number(searchParams.get('page'))}
        count={Math.ceil(total / 10)}
        onChange={(e, page) => {
          setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            next.set('page', String(page));
            return next;
          });
        }}
      />
    </Container>
  );
}
