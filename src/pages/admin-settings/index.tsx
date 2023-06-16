import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function AdminSettingsPage() {
  const { t } = useTranslation('admin');

  return (
    <Container maxWidth="sm">
      <Typography variant="h1" my={3}>
        {t('Admin Settings')}
      </Typography>
    </Container>
  );
}
