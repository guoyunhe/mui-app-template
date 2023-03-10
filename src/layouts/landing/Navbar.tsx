import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const { t } = useTranslation();
  return (
    <AppBar position="sticky" color="inherit">
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
          <Button variant="text" color="inherit" component={Link} to="/about">
            {t('About')}
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
