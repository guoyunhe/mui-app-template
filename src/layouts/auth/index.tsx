import { Box, colors } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../landing/Footer';
import Navbar from '../landing/Navbar';

// Layout for login, register, verify email, reset password, etc.
export default function AuthLayout() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box
        flex="1 1 auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor={colors.blueGrey[200]}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
