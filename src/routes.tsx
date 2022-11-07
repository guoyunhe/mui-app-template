import { RouteObject } from 'react-router-dom';
import { RequireAuth } from './auth/RequireAuth';
import dashboard from './dashboard/routes';
import Home from './home';
import Login from './login';
import NotFound from './not-found';
import TodosPage from './todos';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: 'todos',
    element: (
      <RequireAuth>
        <TodosPage />
      </RequireAuth>
    ),
  },
  ...dashboard,
];

export default routes;
