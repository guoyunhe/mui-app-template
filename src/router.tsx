import { RequireLogin } from 'material-app';
import { lazy } from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

// layouts
const AppLayout = lazy(() => import('./layouts/app'));
const AdminLayout = lazy(() => import('./layouts/admin'));
const AuthLayout = lazy(() => import('./layouts/auth'));
const LandingLayout = lazy(() => import('./layouts/landing'));

// landing pages
const HomePage = lazy(() => import('./pages/home'));
const AboutPage = lazy(() => import('./pages/about'));
const PrivacyPage = lazy(() => import('./pages/privacy'));
const TermsPage = lazy(() => import('./pages/terms'));

// auth pages
const LoginPage = lazy(() => import('./pages/login'));
const RegisterPage = lazy(() => import('./pages/register'));

// app pages
const DashboardPage = lazy(() => import('./pages/dashboard'));
const SettingsPage = lazy(() => import('./pages/settings'));

// admin pages
const AdminDashboardPage = lazy(() => import('./pages/admin-dashboard'));
const AdminUserListPage = lazy(() => import('./pages/admin-user-list'));
const AdminSettingsPage = lazy(() => import('./pages/admin-settings'));

// error pages
const NotFound = lazy(() => import('./pages/not-found'));

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
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'privacy',
        element: <PrivacyPage />,
      },
      {
        path: 'terms',
        element: <TermsPage />,
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
    path: '/app',
    element: (
      <RequireLogin>
        <AppLayout />
      </RequireLogin>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
  {
    path: 'admin',
    element: (
      <RequireLogin>
        <AdminLayout />
      </RequireLogin>
    ),
    children: [
      {
        index: true,
        element: <AdminDashboardPage />,
      },
      {
        path: 'users',
        element: <AdminUserListPage />,
      },
      {
        path: 'settings',
        element: <AdminSettingsPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
