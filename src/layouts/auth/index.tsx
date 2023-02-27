import { AuthProvider } from '@guoyunhe/react-auth';
import { Outlet } from 'react-router-dom';

// Layout for login, register, verify email, reset password, etc.
export default function AuthLayout() {
  return (
    <AuthProvider>
      <div>
        <h1>Dashboard</h1>
        <Outlet />
      </div>
    </AuthProvider>
  );
}
