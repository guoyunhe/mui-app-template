import {
  AutoAwesome as AutoAwesomeIcon,
  Login as LoginIcon,
  Menu as MenuIcon,
  PersonAdd as PersonAddIcon,
  Sell as SellIcon,
  SupportAgent as SupportAgentIcon,
} from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import LanguageMenu from 'src/components/language-menu';

export interface TopNavProps {
  onMenuButtonClick: () => void;
}

export default function TopNav({ onMenuButtonClick }: TopNavProps) {
  const { t } = useTranslation();

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
          <Typography variant="h3" color="inherit" component="div">
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
            component={NavLink}
            to="/pricing"
            startIcon={<SellIcon />}
          >
            {t('Pricing')}
          </Button>
          <Button
            variant="text"
            color="inherit"
            component={NavLink}
            to="/support"
            startIcon={<SupportAgentIcon />}
          >
            {t('Support')}
          </Button>
        </Stack>
        <Box flex="1 1 auto" />
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
      </Toolbar>
    </AppBar>
  );
}
