import { Box, colors, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
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
