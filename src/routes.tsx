import { RequireAuth } from '@guoyunhe/react-auth';
import { RouteObject } from 'react-router-dom';
import AdminLayout from './layouts/admin';
import AppLayout from './layouts/app';
import AuthLayout from './layouts/auth';
import LandingLayout from './layouts/landing';
import NotFound from './pages/error/not-found';
import Home from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: 'app',
    element: (
      <RequireAuth>
        <AppLayout />
      </RequireAuth>
    ),
  },
  {
    path: 'admin',
    element: (
      <RequireAuth>
        <AdminLayout />
      </RequireAuth>
    ),
  },
];

export default routes;
