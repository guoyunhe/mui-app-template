import { Outlet } from 'react-router-dom';

// Layout of the main app for registered users
export default function AppLayout() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
