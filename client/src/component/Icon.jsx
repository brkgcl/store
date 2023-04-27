import React from 'react';
import { FaHome, FaInfoCircle, FaHammer, FaGamepad } from 'react-icons/fa';
import { AiTwotoneAppstore, AiFillStar } from 'react-icons/ai';
import { GiLargePaintBrush } from 'react-icons/gi';
import { TbPlaystationTriangle } from 'react-icons/tb';

const DynamicIcon = ({ name }) => {
  let icon;
  switch (name) {
    case 'home':
      icon = <FaHome />;
      break;
    case 'info':
      icon = <FaInfoCircle />;
      break;
    case 'categories':
      icon = <AiTwotoneAppstore />;
      break;
    case 'star':
      icon = <AiFillStar />;
      break;
    case 'create':
      icon = <GiLargePaintBrush />;
      break;
    case 'work':
      icon = <TbPlaystationTriangle />;
      break;
    case 'game':
      icon = <FaGamepad />;
      break;
    case 'development':
      icon = <FaHammer />;
      break;
    // case 'tools':
    //   icon = <FaHammer />;
    //   break;

    default:
      icon = null;
      break;
  }
  return <>{icon}</>;
};

export default DynamicIcon;
