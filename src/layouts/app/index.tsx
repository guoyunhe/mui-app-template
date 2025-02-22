import { Box } from '@mui/material';
import { ReactNode, useState } from 'react';
import LeftNav from './LeftNav';
import TopNav from './TopNav';
import config from './config';

export default function AppLayout({ children }: { children: ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <LeftNav drawerOpen={drawerOpen} onDrawerClose={() => setDrawerOpen(false)} />
      <Box sx={{ marginLeft: { sm: config.drawerWidth } }}>
        <TopNav onMenuButtonClick={() => setDrawerOpen((prev) => !prev)} />
        {children}
      </Box>
    </div>
  );
}
