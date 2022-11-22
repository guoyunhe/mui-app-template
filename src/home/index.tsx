import { Box } from '@mui/material';
import useAuth from '../auth/useAuth';
import Header from './Header';

export default function Home() {
  useAuth();

  return (
    <Box>
      <Header />
    </Box>
  );
}
