import React from 'react';
import MenuBar from './component/MenuBar';
import ItemBar from './component/ItemBar';

const Sidebar = () => {
  return (
    <div className="flex-1 bg-secondary text-white fixed ">
      <div className="flex p-8 items-center gap-3">
        <img
          className="w-12 h-12 rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
        />
        <div className="">
          <h2>Burak Güçlü</h2>
          <p className="text-xs">burakguclu.dev@gmail.com</p>
        </div>
      </div>
      <div></div>
      <div className="flex  justify-end p-2 pt-12 content-end gap-1">
        <MenuBar />
        <ItemBar />
      </div>
    </div>
  );
};

export default Sidebar;
