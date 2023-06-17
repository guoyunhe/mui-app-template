import { Box, Button, Typography, colors } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation('home');

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
        <Typography variant="h1">{t('Something Impressive')}</Typography>
        <Button variant="outlined">{t('Get Started')}</Button>
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
