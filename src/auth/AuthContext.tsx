import { createContext } from 'react';
import User from '../users/User';

export interface AuthProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthProps>({
  user: null,
  setUser: (user: User | null) => null,
});

export default AuthContext;
