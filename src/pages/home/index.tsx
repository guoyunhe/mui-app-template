import { AuthStatus, useAuth } from '@guoyunhe/react-auth';
import { Box, Typography, colors } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';

export default function HomePage() {
  const auth = useAuth();
  const { t } = useTranslation();
  if (auth.status === AuthStatus.LoggedIn) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <Box>
      <Box
        component="header"
        bgcolor={colors.amber[300]}
        height={400}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h2">{t('Something Impressive')}</Typography>
      </Box>
      <Box
        component="section"
        height={400}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4">{t('Content Block')}</Typography>
      </Box>
      <Box
        component="section"
        height={400}
        bgcolor={colors.blueGrey[200]}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4">{t('Content Block')}</Typography>
      </Box>
      <Box
        component="section"
        height={400}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4">{t('Content Block')}</Typography>
      </Box>
      <Box
        component="section"
        height={400}
        bgcolor={colors.blueGrey[200]}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4">{t('Content Block')}</Typography>
      </Box>
    </Box>
  );
}
