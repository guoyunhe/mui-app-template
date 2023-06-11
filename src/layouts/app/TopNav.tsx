import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

export interface TopNavProps {
  onMenuButtonClick: () => void;
}

export default function TopNav({ onMenuButtonClick }: TopNavProps) {
  return (
    <AppBar position="sticky" color="inherit" sx={{ display: { sm: 'none' } }}>
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={onMenuButtonClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h3" noWrap component="div">
          {import.meta.env.VITE_APP_NAME}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
