import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function AdminDashboardPage() {
  const { t } = useTranslation('admin');

  return (
    <Container maxWidth="sm">
      <Typography variant="h1" my={3}>
        {t('Dashboard')}
      </Typography>
    </Container>
  );
}
