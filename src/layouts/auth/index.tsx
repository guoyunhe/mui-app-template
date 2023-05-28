import { ArrowBack } from '@mui/icons-material';
import { Box, Button, colors } from '@mui/material';
import { t } from 'i18next';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from 'src/components/footer';

// Layout for login, register, verify email, reset password, etc.
export default function AuthLayout() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box
        flex="1 1 auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor={colors.blueGrey[200]}
      >
        <Box>
          <Button
            startIcon={<ArrowBack />}
            color="inherit"
            component={NavLink}
            to="/"
            sx={{ mb: 2 }}
          >
            {t('Back')}
          </Button>
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
