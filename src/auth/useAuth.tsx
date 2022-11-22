import useSWR from 'swr';

export default function useAuth() {
  const { data, error } = useSWR('me');
}
