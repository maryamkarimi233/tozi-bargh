import React from 'react';
import { useNavigate } from 'react-router-dom';
import './managment.css';
import {Button} from '@chakra-ui/react'

const Service = () => {
  const navigate = useNavigate();
  const menuItems = [
    { path: '/', label: 'خانه' },
    { path: '/about', label: 'Reportvisit1' },
    { path: '/contact', label: 'Reportvisit2' }
  ];

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <nav className="data">
      <div className="data-container">
        <button className="data-logo" onClick={() => handleButtonClick('/')}>لوگو</button>
        <ul className="data-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="data-item">
              <button onClick={() => handleButtonClick(item.path)} className="data-links">
          
              
<Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500'
>
{item.label}
</Button>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Service;






