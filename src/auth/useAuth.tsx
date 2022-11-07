import { useContext } from 'react';
import useSWR from 'swr';
import AuthContext from './AuthContext';

export default function useAuth() {
  const { data, error } = useSWR('/me');
  return useContext(AuthContext);
}
