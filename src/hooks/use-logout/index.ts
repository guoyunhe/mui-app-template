import { AuthStatus, useApp } from 'material-app';
import { useCallback } from 'react';
import xior from 'xior';

export default function useLogout() {
  const { setAuthStatus, setAuthToken } = useApp();
  return useCallback(() => {
    xior.post('/logout');
    setAuthStatus(AuthStatus.LoggedOut);
    setAuthToken(null);
  }, [setAuthStatus, setAuthToken]);
}
