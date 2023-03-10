import { AuthProvider } from '@guoyunhe/react-auth';
import { CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LanguageEffect from './components/LanguageEffect';
import routes from './routes';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <AuthProvider>
      <CssBaseline />
      <RouterProvider router={router} />
      <LanguageEffect />
    </AuthProvider>
  );
}
