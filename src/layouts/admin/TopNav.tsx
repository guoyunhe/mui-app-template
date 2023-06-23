import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export interface TopNavProps {
  onMenuButtonClick: () => void;
}

export default function TopNav({ onMenuButtonClick }: TopNavProps) {
  const { t } = useTranslation('admin');

  return (
    <AppBar position="sticky" color="inherit" sx={{ display: { sm: 'none' } }}>
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={onMenuButtonClick}>
          <MenuIcon />
        </IconButton>
        <Typography fontSize={20} noWrap component="div">
          {import.meta.env.VITE_APP_NAME} {t('Admin')}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
