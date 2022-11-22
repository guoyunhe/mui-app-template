import { useContext } from 'react';
import AuthContext from './AuthContext';

// Hook to get & set auth status and user data.
export default function useAuth() {
  return useContext(AuthContext);
}
