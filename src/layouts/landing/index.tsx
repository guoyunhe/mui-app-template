import { Box } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '~/components/footer';
import LeftNav from './LeftNav';
import TopNav from './TopNav';

// Layout of static landing pages for guests
export default function LandingLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <LeftNav drawerOpen={drawerOpen} onDrawerClose={() => setDrawerOpen(false)} />
      <TopNav onMenuButtonClick={() => setDrawerOpen((prev) => !prev)} />
      <Box sx={{ flex: '1 1 auto' }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
