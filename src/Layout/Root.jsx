import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import BackgroundAnimation from '../utils/BackgroundAnimation';

const Root = () => {
  return (
    <div className="bg-[#0c0c0e] min-h-screen text-white relative overflow-x-hidden font-mono">
      {/* Fixed background canvas animation */}
      <BackgroundAnimation />
      
      {/* Page content rendered cleanly on top */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Root;