import { Delete as DeleteIcon } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import xior from 'xior';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import User from '~/types/models/User';

export interface UserCardProps {
  user: User;
  onDelete: () => void;
}

export default function UserCard({ user, onDelete }: UserCardProps) {
  const { t } = useTranslation('admin');
  const [deleting, setDeleting] = useState(false);

  return (
    <ListItem
      divider
      secondaryAction={
        <LoadingButton
          startIcon={<DeleteIcon />}
          color="error"
          loading={deleting}
          onClick={() => {
            setDeleting(true);
            xior
              .delete('/users/' + user.id)
              .then(() => {
                onDelete();
              })
              .finally(() => {
                setDeleting(false);
              });
          }}
        >
          {t('Delete')}
        </LoadingButton>
      }
    >
      <ListItemAvatar>
        <Avatar src={user.avatar?.url} />
      </ListItemAvatar>
      <ListItemText primary={user.name} secondary={user.email} />
    </ListItem>
  );
}
