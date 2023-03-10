import { Outlet } from 'react-router-dom';

// Layout for login, register, verify email, reset password, etc.
export default function AuthLayout() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
