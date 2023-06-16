import { RequireAuth } from '@guoyunhe/react-auth';
import { lazy } from 'react';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';

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

const router = createBrowserRouter(routes);

export default function Router() {
  return <RouterProvider router={router} />;
}