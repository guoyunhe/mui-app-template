import { AuthStatus, useAuth } from '@guoyunhe/react-auth';
import {
  AutoAwesome as AutoAwesomeIcon,
  CreditCard,
  Dashboard as DashboardIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  PersonAdd as PersonAddIcon,
  Settings as SettingsIcon,
  SupportAgent as SupportAgentIcon,
} from '@mui/icons-material';
import { AppBar, Avatar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { ThemeIconButton } from 'material-app';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import LanguageMenu from '~/components/language-menu';
import useLogout from '~/hooks/use-logout';
import User from '~/types/models/User';

export interface TopNavProps {
  onMenuButtonClick: () => void;
}

export default function TopNav({ onMenuButtonClick }: TopNavProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const auth = useAuth<User>();
  const logout = useLogout();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuButtonClick}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          component={NavLink}
          to="/"
          style={{ display: 'flex', color: 'inherit', textDecoration: 'none' }}
        >
          <Box
            component="img"
            src="/logo.svg"
            width={32}
            height={32}
            sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }}
          />
          <Typography fontSize={20} color="inherit" component="div">
            {import.meta.env.VITE_APP_NAME}
          </Typography>
        </Box>
        <Stack direction="row" ml={3} sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Button
            variant={location.pathname === '/features' ? 'contained' : 'text'}
            color="inherit"
            disableElevation
            component={NavLink}
            to="/features"
            startIcon={<AutoAwesomeIcon />}
          >
            {t('Features')}
          </Button>
          <Button
            variant={location.pathname === '/pricing' ? 'contained' : 'text'}
            color="inherit"
            disableElevation
            startIcon={<CreditCard />}
            component={NavLink}
            to="/pricing"
          >
            {t('Pricing')}
          </Button>
          <Button
            variant={location.pathname === '/support' ? 'contained' : 'text'}
            color="inherit"
            disableElevation
            startIcon={<SupportAgentIcon />}
            component={NavLink}
            to="/support"
          >
            {t('Support')}
          </Button>
        </Stack>
        <Box flex="1 1 auto" />
        <ThemeIconButton />
        {auth.status === AuthStatus.LoggedIn && auth.user ? (
          <Stack direction="row">
            <Button
              variant="text"
              color="inherit"
              disableElevation
              startIcon={
                <Avatar
                  src={auth.user.avatar?.url}
                  alt={auth.user.name}
                  sx={{ width: 24, height: 24 }}
                />
              }
              component={NavLink}
              to="/app/settings"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              {auth.user.name}
            </Button>
            <Button
              variant="text"
              color="inherit"
              disableElevation
              startIcon={<DashboardIcon />}
              component={NavLink}
              to="/app"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              {t('Dashboard')}
            </Button>
            <Button
              variant="text"
              color="inherit"
              disableElevation
              startIcon={<SettingsIcon />}
              component={NavLink}
              to="/app"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              {t('Settings')}
            </Button>
            <Button
              variant="text"
              color="inherit"
              disableElevation
              startIcon={<LogoutIcon />}
              onClick={logout}
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              {t('Logout')}
            </Button>
          </Stack>
        ) : (
          <Stack direction="row">
            <LanguageMenu />
            <Button
              variant="text"
              color="inherit"
              disableElevation
              startIcon={<LoginIcon />}
              component={NavLink}
              to="/login"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              {t('Login')}
            </Button>
            <Button
              variant="text"
              color="inherit"
              disableElevation
              startIcon={<PersonAddIcon />}
              component={NavLink}
              to="/register"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              {t('Register')}
            </Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}
