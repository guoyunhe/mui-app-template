import { RequireAuth } from '@guoyunhe/react-auth';
import { RouteObject } from 'react-router-dom';
import AdminLayout from './layouts/admin';
import AppLayout from './layouts/app';
import AuthLayout from './layouts/auth';
import LandingLayout from './layouts/landing';
import NotFound from './not-found';
import Login from './pages/auth/login';
import Home from './pages/landing/home';

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
    path: 'auth',
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'login',
        element: <Login />,
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
