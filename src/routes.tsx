import { RequireAuth } from '@guoyunhe/react-auth';
import { RouteObject } from 'react-router-dom';
import AdminLayout from './layouts/admin';
import AppLayout from './layouts/app';
import AuthLayout from './layouts/auth';
import LandingLayout from './layouts/landing';
import DashboardPage from './pages/dashboard';
import NotFound from './pages/error/not-found';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import SettingsPage from './pages/settings';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
    path: '/',
    element: (
      <RequireAuth>
        <AppLayout />
      </RequireAuth>
    ),
    children: [
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
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
