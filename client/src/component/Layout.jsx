import React from 'react';
// import Home from '../pages/Home';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Kesfet from '../pages/Kesfet';
// import Work from '../pages/Work';
// import Game from '../pages/Game';
// import Development from '../pages/Development';
// import Categories from '../pages/Categories';

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full flex fixed">
      <div className="flex-1 ">
        <Sidebar />
      </div>
      <div className="flex-[4] flex-col  ">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
