import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

// Layout of static landing pages for guests
export default function LandingLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
