import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation('about');
  return (
    <Container maxWidth="sm">
      <Typography variant="h1">{t('About')}</Typography>
      <Typography>TODO</Typography>
    </Container>
  );
}
