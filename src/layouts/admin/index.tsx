import { Box } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LeftNav from './LeftNav';
import TopNav from './TopNav';
import config from './config';

export default function AdminLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <LeftNav drawerOpen={drawerOpen} onDrawerClose={() => setDrawerOpen(false)} />
      <Box sx={{ marginLeft: { sm: config.drawerWidth } }}>
        <TopNav onMenuButtonClick={() => setDrawerOpen((prev) => !prev)} />
        <Outlet />
      </Box>
    </div>
  );
}
