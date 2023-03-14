import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageMenu from 'src/components/language-menu';
export default function Navbar() {
  const { t } = useTranslation();
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Link to="/" style={{ display: 'flex', color: 'inherit', textDecoration: 'none' }}>
          <Box component="img" src="/logo.svg" sx={{ mr: 1 }} />
          <Typography variant="h6" color="inherit" component="div">
            {import.meta.env.VITE_APP_NAME}
          </Typography>
        </Link>
        <Stack direction="row" spacing={2} ml={3}>
          <Button variant="text" color="inherit" component={Link} to="/features">
            {t('Features')}
          </Button>
          <Button variant="text" color="inherit" component={Link} to="/pricing">
            {t('Pricing')}
          </Button>
          <Button variant="text" color="inherit" component={Link} to="/support">
            {t('Support')}
          </Button>
        </Stack>
        <Box flex="1 1 auto" />
        <Stack direction="row" spacing={2}>
          <LanguageMenu />
          <Button variant="text" color="inherit" component={Link} to="/login">
            {t('Login')}
          </Button>
          <Button variant="text" color="inherit" component={Link} to="/register">
            {t('Register')}
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
