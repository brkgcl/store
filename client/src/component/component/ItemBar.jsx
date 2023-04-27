import React from 'react';
import DynamicIcon from '../Icon';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const ItemBar = () => {
  const menuItemList = [
    { name: 'Ana Sayfa', icon: 'home', path: '/' },
    { name: 'Keşfet', icon: 'star', path: '/discovery' },
    { name: 'Çalış', icon: 'work', path: '/work' },
    { name: 'Oyna', icon: 'game', path: '/game' },
    { name: 'Geliştir', icon: 'development', path: '/development' },
    { name: 'Kategoriler', icon: 'categories', path: '/categories' },
  ];

  let location = useLocation();
  console.log('location: ', location.pathname);
  const [selectedItem, setSelectedItem] = useState(location.pathname);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="bg-[#292937]  drop-shadow-2xl shadow-white h-screen w-2/3 -skew-y-12 rounded-2xl">
      <div className="skew-y-12 pt-36 h-screen flex flex-col ">
        <ul className="">
          {menuItemList.map((item) => (
            <Link to={item.path} className="w-full h-full">
              <li
                className={`flex  p-2 pl-8 hover:bg-primary hover:text-red-600 hover:pl-3 hover:rounded-l-lg hover:ml-1 ${
                  selectedItem?.path === item.path ||
                  item.path === location.pathname
                    ? 'bg-primary text-red-600 pl-3 rounded-l-lg ml-1'
                    : ''
                }`}
                key={item.name}
                onClick={() => handleItemClick(item)}
              >
                <div className="flex gap-3 items-center">
                  <DynamicIcon name={item.icon} />
                  <h2 className="text-lg">{item.name}</h2>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemBar;

/**
 * import { lazy } from 'react';

const DynamicIcon = ({...props}) => {
  const iconDir = props.icon?.slice(0, 2).toLowerCase()
  console.log(iconDir) // ri, tn, tb
  // expetation -> import { RiShieldStarLine } from "react-icons/ri"
  const Icon = lazy(() => import(`react-icons/${iconDir}/index.js`).then(icons => icons[props.icon]))
  console.log(Icon) // error Cannot find module

  return (
    <div>
      <Icon />
    </div>
  )
}

export default DynamicIcon
 */
