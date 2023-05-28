import {
  AutoAwesome as AutoAwesomeIcon,
  Login as LoginIcon,
  PersonAdd as PersonAddIcon,
  Sell as SellIcon,
  SupportAgent as SupportAgentIcon,
} from '@mui/icons-material';
import { Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { drawerWidth } from './config';

export interface LeftNavProps {
  drawerOpen: boolean;
  onDrawerClose: () => void;
}

export default function LeftNav({ drawerOpen, onDrawerClose }: LeftNavProps) {
  const { t } = useTranslation();

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
      </List>
    </Drawer>
  );
}
