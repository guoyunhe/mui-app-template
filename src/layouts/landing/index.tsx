import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

// Layout of static landing pages for guests
export default function LandingLayout() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box flex="1 1 auto">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
