import { AuthStatus, useAuth, useLogout } from '@guoyunhe/react-auth';
import {
  AutoAwesome as AutoAwesomeIcon,
  Dashboard as DashboardIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  PersonAdd as PersonAddIcon,
  Sell as SellIcon,
  Settings as SettingsIcon,
  SupportAgent as SupportAgentIcon,
} from '@mui/icons-material';
import { Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import User from 'src/types/models/User';
import { drawerWidth } from './config';

export interface LeftNavProps {
  drawerOpen: boolean;
  onDrawerClose: () => void;
}

export default function LeftNav({ drawerOpen, onDrawerClose }: LeftNavProps) {
  const { t } = useTranslation();
  const auth = useAuth<User>();
  const logout = useLogout();

  return (
    <Drawer open={drawerOpen} onClose={onDrawerClose} sx={{ width: drawerWidth }}>
      <List sx={{ width: drawerWidth }} onClick={onDrawerClose}>
        <ListItemButton component={NavLink} to="/features">
          <ListItemIcon>
            <AutoAwesomeIcon />
          </ListItemIcon>
          <ListItemText primary={t('Features')} />
        </ListItemButton>
        <ListItemButton component={NavLink} to="/pricing">
          <ListItemIcon>
            <SellIcon />
          </ListItemIcon>
          <ListItemText primary={t('Pricing')} />
        </ListItemButton>
        <ListItemButton component={NavLink} to="/support">
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary={t('Support')} />
        </ListItemButton>
        <Divider />
        {auth.status === AuthStatus.LoggedIn && auth.user ? (
          <>
            <ListItemButton component={NavLink} to="/app">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={t('Dashboard')} />
            </ListItemButton>
            <ListItemButton component={NavLink} to="/app/settings">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={t('Settings')} />
            </ListItemButton>
            <ListItemButton onClick={logout.submit}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={t('Logout')} />
            </ListItemButton>
          </>
        ) : (
          <>
            <ListItemButton component={NavLink} to="/login">
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary={t('Login')} />
            </ListItemButton>
            <ListItemButton component={NavLink} to="/register">
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary={t('Register')} />
            </ListItemButton>
          </>
        )}
      </List>
    </Drawer>
  );
}
