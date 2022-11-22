import { Dialog, LinearProgress } from '@mui/material';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthStatus from '../../types/enums/AuthStatus';
import useAuth from './useAuth';

export interface RequireAuthProps {
  children: ReactNode;
}

export function RequireAuth({ children }: RequireAuthProps) {
  const { status } = useAuth();

  const location = useLocation();

  if (status === AuthStatus.NotSure) {
    return <LinearProgress />;
  }

  if (status === AuthStatus.NotLoggedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (status === AuthStatus.LoggedOut) {
    // You can decide where to redirect
    return <Navigate to="/" />;
  }

  return (
    <>
      {children}
      <Dialog open={status === AuthStatus.Expired}></Dialog>
    </>
  );
}
