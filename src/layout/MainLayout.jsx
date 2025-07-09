// In MainLayout.jsx
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainLayout() {
  const [isMobile, setIsMobile] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      // setIsMobile(window.innerWidth < 1000); // This line is commented out, so isMobile is always false.
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      {isMobile ? ( // This block won't be active if setIsMobile is always false
        <main className="py-8 px-4 lg:px-12 text-center min-h-screen flex items-center justify-center">
          <p className="text-lg lg:text-xl">
            This page is designed for desktop users. For the best experience, please access it from a desktop or laptop device.
          </p>
        </main>
      ) : (
        <div className="flex flex-col w-full h-full min-h-screen">
          <Navbar user={user} />
          
          {/* Page content fills available height */}
          {/* ADD flex flex-col to the main tag here */}
          <main className="flex-grow max-w-[85%] w-full mx-auto w-full h-auto "> 
            <Outlet />
          </main>
          
          <ToastContainer />
          <Footer />
        </div>
      )}
    </>
  );
}

export default MainLayout;