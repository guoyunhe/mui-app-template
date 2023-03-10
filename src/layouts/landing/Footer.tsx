import { Box, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const date = new Date();

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Box component="footer" p={3} display="flex">
      <Box>
        &copy; {date.getFullYear()} {import.meta.env.VITE_APP_NAME}
      </Box>
      <Box flex="1 1 auto" />
      <Stack direction="row" spacing={2}>
        <Link to="/terms">{t('Terms')}</Link>
        <Link to="/privacy">{t('Privacy')}</Link>
        <Link to="/about">{t('About')}</Link>
      </Stack>
    </Box>
  );
}
