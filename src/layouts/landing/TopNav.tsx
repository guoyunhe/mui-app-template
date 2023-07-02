import { AuthStatus, useAuth, useLogout } from '@guoyunhe/react-auth';
import {
  AutoAwesome as AutoAwesomeIcon,
  Dashboard as DashboardIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  PersonAdd as PersonAddIcon,
  Settings as SettingsIcon,
  SupportAgent as SupportAgentIcon,
} from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { AppBar, Avatar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { PaletteModeButton } from 'mui-palette-mode';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import LanguageMenu from 'src/components/language-menu';
import User from 'src/types/models/User';

export interface TopNavProps {
  onMenuButtonClick: () => void;
}

export default function TopNav({ onMenuButtonClick }: TopNavProps) {
  const { t } = useTranslation();
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
            sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }}
          />
          <Typography fontSize={20} color="inherit" component="div">
            {import.meta.env.VITE_APP_NAME}
          </Typography>
        </Box>
        <Stack direction="row" ml={3} sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Button
            variant="text"
            color="inherit"
            component={NavLink}
            to="/features"
            startIcon={<AutoAwesomeIcon />}
          >
            {t('Features')}
          </Button>
          <Button
            variant="text"
            color="inherit"
            startIcon={<SupportAgentIcon />}
            component="a"
            href="https://t.me/resume_maker_support"
            target="_blank"
          >
            {t('Support')}
          </Button>
        </Stack>
        <Box flex="1 1 auto" />
        <PaletteModeButton />
        {auth.status === AuthStatus.LoggedIn && auth.user ? (
          <Stack direction="row">
            <Button
              variant="text"
              color="inherit"
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
              startIcon={<SettingsIcon />}
              component={NavLink}
              to="/app"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              {t('Settings')}
            </Button>
            <LoadingButton
              variant="text"
              color="inherit"
              startIcon={<LogoutIcon />}
              loading={logout.loading}
              loadingPosition="start"
              onClick={logout.submit}
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              {t('Logout')}
            </LoadingButton>
          </Stack>
        ) : (
          <Stack direction="row">
            <LanguageMenu />
            <Button
              variant="text"
              color="inherit"
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
