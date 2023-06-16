import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function TermsPage() {
  const { t } = useTranslation('terms');
  return (
    <Container maxWidth="sm">
      <Typography variant="h1">{t('Terms')}</Typography>
      <Typography>TODO</Typography>
    </Container>
  );
}
