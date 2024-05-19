import { Box, Button, Typography, colors } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation('home');

  return (
    <Box>
      <title>
        {t('Home')} - {import.meta.env.VITE_APP_NAME}
      </title>
      <Box
        component="header"
        bgcolor={colors.amber[300]}
        height={400}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1" mb={4}>
          {t('Something Impressive')}
        </Typography>
        <Button variant="contained" size="large">
          {t('Get Started')}
        </Button>
      </Box>
      <Box
        component="section"
        height={400}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h2">{t('Content Block')}</Typography>
      </Box>
      <Box
        component="section"
        height={400}
        bgcolor={colors.blueGrey[200]}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h2">{t('Content Block')}</Typography>
      </Box>
      <Box
        component="section"
        height={400}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h2">{t('Content Block')}</Typography>
      </Box>
      <Box
        component="section"
        height={400}
        bgcolor={colors.blueGrey[200]}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h2">{t('Content Block')}</Typography>
      </Box>
    </Box>
  );
}
