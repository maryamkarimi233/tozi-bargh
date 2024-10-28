import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import './exm.css';

const menuItems = [
  { label: ' اطاعات پایه', subItems: [{ path: '/page1-1', label: 'آیتم ۱-۱' }, { path: '/page1-2', label: 'آیتم ۱-۲' }, { path: '/page1-3', label: 'آیتم ۱-۳' }, { path: '/page1-4', label: 'آیتم ۱-۴' }] },
  { label: ' شناسنامه تعمیرات', subItems: [{ path: '/page2-1', label: 'آیتم ۲-۱' }, { path: '/page2-2', label: 'آیتم ۲-2' }, { path: '/page2-3', label: 'آیتم ۲-۳' }, { path: '/page2-4', label: 'آیتم ۲-۴' }] },
  { label: ' بازدید', subItems: [{ path: '/page3-1', label: 'آیتم ۳-۱' }, { path: '/page3-2', label: 'آیتم ۳-۲' }, { path: '/page3-3', label: 'آیتم ۳-۳' }, { path: '/page3-4', label: 'آیتم ۳-۴' }] },
  { label: ' سرویس', subItems: [{ path: '/page4-1', label: 'آیتم ۴-۱' }, { path: '/page4-2', label: 'آیتم ۴-۲' }, { path: '/page4-3', label: 'آیتم ۴-۳' }, { path: '/page4-4', label: 'آیتم ۴-۴' }] },
  { label: ' گزارش سیستم', subItems: [{ path: '/page5-1', label: 'آیتم ۵-۱' }, { path: '/page5-2', label: 'آیتم ۵-۲' }, { path: '/page5-3', label: 'آیتم ۵-۳' }, { path: '/page5-4', label: 'آیتم ۵-۴' }] },
  { label: ' مدیریت سیستم', subItems: [{ path: '/page6-1', label: 'آیتم ۶-۱' }, { path: '/page6-2', label: 'آیتم ۶-۲' }, { path: '/page6-3', label: 'آیتم ۶-۳' }, { path: '/page6-4', label: 'آیتم ۶-۴' }] },
];

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        {/* <Link to="/" className="navbar-logo">لوگو</Link> */}
        <div className="nav-menus">
          {menuItems.map((menu, index) => (
            <Menu key={index}>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className="menu-button">
                {menu.label}
              </MenuButton>
              <MenuList>
                {menu.subItems.map((subItem, subIndex) => (
                  <MenuItem as={Link} to={subItem.path} key={subIndex}>
                    {subItem.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
