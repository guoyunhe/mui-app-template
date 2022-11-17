import { Outlet } from 'react-router-dom';

// Layout of the dashboard for administrators
export default function AdminLayout() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
