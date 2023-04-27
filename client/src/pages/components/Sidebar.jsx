import React from 'react';

const Sidebar = () => {
  const categoriItem = [{ name: 'game', path: '/game', icon: 'game' }];
  return (
    <div className="flex-1 bg-secondary text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl">PWA-STORE</h1>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Sidebar;
