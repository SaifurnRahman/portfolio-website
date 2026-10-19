import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, ScrollRestoration } from 'react-router';
import Footer from '../components/Footer';
import BackgroundAnimation from '../utils/BackgroundAnimation';

const Root = () => {
  return (
    <div className="bg-bg min-h-screen text-fg relative overflow-x-hidden font-sans transition-colors duration-500">
      {/* Fixed calm backdrop */}
      <BackgroundAnimation />

      {/* Page content rendered on top */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
      </div>
    </div>
  );
};

export default Root;
