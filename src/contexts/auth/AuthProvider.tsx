import { ReactNode, useEffect, useState } from 'react';
import AuthStatus from '../../types/enums/AuthStatus';
import User from '../../types/models/User';
import AuthContext from './AuthContext';

export interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [status, setStatus] = useState(AuthStatus.NotSure);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // TODO: check auth status
  }, []);

  return <AuthContext.Provider value={{ status, setStatus, user, setUser }}>{children}</AuthContext.Provider>;
}
