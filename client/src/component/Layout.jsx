import React from 'react';
import Navbar from '../pages/components/Navbar';
import Home from '../pages/Home';
import Sidebar from '../pages/components/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full flex">
      <Sidebar />
      <div className="flex-[3]">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default Layout;
