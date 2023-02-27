import { AuthProvider } from '@guoyunhe/react-auth';
import { Outlet } from 'react-router-dom';

// Layout of the dashboard for administrators
export default function AdminLayout() {
  return (
    <AuthProvider>
      <div>
        <h1>Dashboard</h1>
        <Outlet />
      </div>
    </AuthProvider>
  );
}
