import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function PrivacyPage() {
  const { t } = useTranslation('privacy');
  return (
    <Container maxWidth="sm">
      <Typography variant="h1">{t('Privacy')}</Typography>
      <Typography>TODO</Typography>
    </Container>
  );
}
