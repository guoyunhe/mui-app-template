import { RouteObject } from 'react-router-dom';
import Dashboard from './dashboard';
import dashboardRoutes from './dashboard/routes';
import Home from './home';
import NotFound from './not-found';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: dashboardRoutes,
  },
];

export default routes;
