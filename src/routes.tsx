import { RouteObject } from 'react-router-dom';
import dashboard from './dashboard/routes';
import Home from './home';
import NotFound from './not-found';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  ...dashboard,
];

export default routes;
