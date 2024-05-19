import { ArrowBack } from '@mui/icons-material';
import { AppBar, Box, Button, Paper, Tab, Tabs, Toolbar } from '@mui/material';
import { RedirectAfterLogin } from 'material-app';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '~/components/footer';

// Layout for login and register page.
export default function AuthLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#dddddd' }}>
      <AppBar color="inherit" position="sticky">
        <Toolbar>
          <Button startIcon={<ArrowBack />} color="inherit" component={NavLink} to="/">
            {t('Back')}
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          flex: '1 1 auto',
          py: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper>
          <Tabs
            value={location.pathname}
            onChange={(e, value) => {
              navigate(value);
            }}
            variant="fullWidth"
          >
            <Tab label={t('Login')} value="/login" />
            <Tab label={t('Register')} value="/register" />
          </Tabs>
          <RedirectAfterLogin />
          <Outlet />
        </Paper>
      </Box>
      <Footer />
    </Box>
  );
}
