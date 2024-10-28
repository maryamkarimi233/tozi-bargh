import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
 import './nav.css';

const Item3 = () => {
  const menuItems = [
    { path: '/about', label: 'item1' },
    { path: '/data', label: 'item2' },
    { path: '/about', label: 'item3' },
    { path: '/contact', label: 'item4' },

  ];

  const serviceItems = [
    { path: '/services/service1', label: 'سرویس ۱' },
    { path: '/services/service2', label: 'سرویس ۲' },
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
    
        <Menu>
          <MenuButton rightIcon={<ChevronDownIcon />}>
           اطلاعات پایه
          </MenuButton>
          <MenuList>
            {menuItems.map((item, index) => (
              <MenuItem as={Link} to={item.path} key={index}>{item.label}</MenuItem>
            ))}
            <MenuDivider />
            {/* <MenuGroup title="خدمات">
              {serviceItems.map((item, index) => (
                <MenuItem as={Link} to={item.path} key={index}>{item.label}</MenuItem>
              ))}
            </MenuGroup> */}
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
};

export default Item3;
