import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Button, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import './Navbar.css';
import Equipment from '../equip/Equip';
import Item from '../item/Item';
import Idcode from '../header/menu/Idcode';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box bg="blue.800" p={4}>
      <Flex justify="center" align="center" wrap="wrap" maxW="1100px" mx="auto">
       
        <IconButton
          display={{ base: 'block', md: 'none' }}
          icon={<HamburgerIcon />}
          onClick={toggleMenu}
          variant="ghost"
          aria-label="Toggle Navigation"
          className={`hamburger-icon ${isOpen ? 'open' : ''}`}
        />
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
        >
         
          <Link to="/sign/page1" className="nav-link"><Button variant="ghost" colorScheme="yellow">اطلاعات پایه</Button></Link>
          <Link to="/page2" className="nav-link"><Button variant="ghost" colorScheme="yellow"> شناسنامه تعمیرات</Button></Link>
          <Link to="/page3" className="nav-link"><Button variant="ghost" colorScheme="yellow">سرویس</Button></Link>
          <Link to="/page4" className="nav-link"><Button variant="ghost" colorScheme="yellow">بازدید</Button></Link>
          <Link to="/page5" className="nav-link"><Button variant="ghost" colorScheme="yellow">گزارش سیستم</Button></Link>
          <Link to="/page6" className="nav-link"><Button variant="ghost" colorScheme="yellow"> مدیریت سیستم </Button></Link>
          <Link to="/page7" className="nav-link"><Button variant="ghost" colorScheme="yellow"><Equipment/></Button></Link>
          <Link to="/item" className="nav-link"><Button variant="ghost" colorScheme="yellow"> <Item/></Button></Link>
          <Link to="/item" className="nav-link"><Button variant="ghost" colorScheme="yellow"><Idcode/></Button></Link>
          <Link to="/manage" className="nav-link"><Button variant="ghost" colorScheme="yellow">مدیریت درخواست </Button></Link>
          <Link to="/sign/map" className="nav-link"><Button variant="ghost" colorScheme="yellow">نقشه</Button></Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;



    {/* <nav className="nav">
      <div className="nav-container">
   
        <ul className="nav-menu">
        <li className="nav-item  link">
            <Link to="/data" className="nav-links "><Data/></Link>
          </li>
          <li className="nav-item  link">
            <Link to="/data" className="nav-links "><Service/></Link>
          </li>
          <li className="nav-item  link">
            <Link to="/data" className="nav-links "><Visitation/></Link>
          </li>
          <li className="nav-item  link">
            <Link to="/data" className="nav-links "><ID/></Link>
          </li>
          <li className="nav-item  link">
            <Link to="/data" className="nav-links "><Equipment/></Link>
          </li>
          <li className="nav-item  ">
            <Link to="/" className="nav-links"><Idcode/></Link>
          </li> 
          <li className="nav-item  link   ">
            <Link to="/visitation" className="nav-links"><Item/></Link>
          </li> 
           <li className="nav-item  link   ">
            <Link to="/visitation" className="nav-links"><Reportsystem/></Link>
          </li>
          <li className="nav-item manage  ">
            <Link to="/management" className="  manage nav-links" ><Managesystem/></Link>
          </li>
          <li className="nav-item manage  ">
            <Link to="/management" className="  manage nav-links" >مدیریت درخواست </Link>
          </li>
          <li className="nav-item">
            <Link to="/map" className="nav-links"> نقشه </Link>
 
          </li>
        </ul>
 
      </div>
    </nav> * */}


    

  

 
