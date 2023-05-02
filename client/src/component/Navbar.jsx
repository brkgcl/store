import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className="flex w-full h-16 bg-primary text-white items-center justify-between border-b-2 border-secondary p-2">
      <div className="flex w-2/5 pl-16">
        <div className="flex w-full p-1 rounded-lg  items-center  gap-2 border border-secondary ">
          <input
            type="text"
            placeholder="search..."
            className="w-full  bg-secondary opacity-80 rounded-lg outline-none p-1 text-white pl-3"
          />
          <AiOutlineSearch size={20} className="cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center p-2">
        <div className="flex p-8 items-center gap-3 cursor-pointer">
          <img
            className="w-10 h-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
          />
          <div className="">
            <h2>Burak Güçlü</h2>
            <p className="text-xs">burakguclu.dev@gmail.com</p>
          </div>
        </div>
        <BiDotsVerticalRounded size={20} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
