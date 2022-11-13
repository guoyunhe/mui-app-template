import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelect from '../i18n/LanguageSelect';
import bikeImage from './bike.jpg';

export default function Header() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        backgroundImage: `url(${bikeImage})`,
        bgSize: 'cover',
        bgPosition: 'center',
        bgRepeat: 'no-repeat',
        h: '700px',
      }}
    >
      <Box sx={{ position: 'absolute', p: 4, display: 'flex', gap: 1 }}>
        <div>
          <LanguageSelect />
        </div>
        <div>
          <Button component={Link} to="/login">
            {t('Login')}
          </Button>
        </div>
        <div>
          <Button component={Link} to="/register">
            {t('Register')}
          </Button>
        </div>
      </Box>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          component="h1"
          fontWeight="bold"
          fontStyle="italic"
          textTransform="uppercase"
        >
          {t('The Cool Bike App')}
        </Typography>
      </Box>
    </Box>
  );
}
