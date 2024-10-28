import React  from 'react';
import { Link } from 'react-router-dom';

import './Menu.css'
import { Box } from '@chakra-ui/react';
import Equipment from './Equipment';
import Item from './Item';
import Idcode from './Idcode';

const Menu = () => {
 
  return (
    <nav className="navbar">
      <Box className="navbar-container">
        <Box className="navbar-container">

         
       {/* <Equipment/> */}
        
{/* <Idcode/> */}
{/* <Item/> */}

          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/navbar" className="nav-links"></Link>
            </li>
            <li className="nav-item">
              <Link to="/equipment" className="nav-links"> <Equipment/></Link>
            </li>
            <li className="nav-item">
              <Link to="/managment" className="nav-links"><Item/></Link>
            </li>
            <li className="nav-item">
              {/* <Link to="/managment" className="nav-links"><Management/></Link> */}
            </li>
            <li className="nav-item">
              <Link to="/map" className="nav-links">نمایش نقشه</Link>
            </li>
          </ul>
        </Box>

      </Box>


    </nav >
  );
};

export default Menu;
