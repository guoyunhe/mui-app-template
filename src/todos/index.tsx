import useSWR from 'swr';

export default function TodosPage() {
  useSWR('/me');
  return (
    <div>
      <h1>TODO</h1>
    </div>
  );
}
