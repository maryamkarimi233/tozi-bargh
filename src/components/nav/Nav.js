import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Menu  ,MenuButton ,IconButton ,Box} from '@chakra-ui/react' ;
import Idcode from '../header/menu/Idcode';
import  Map  from  '../header/map/Map';
import Item1 from '../Menuitem/Item1';
import Item2 from '../Menuitem/Item2';
import Item3 from '../Menuitem/Item3';
import Item4 from '../Menuitem/Item4';
import Item5 from '../Menuitem/Item5';
import Item6 from '../Menuitem/Item6';
import { Grid, GridItem } from '@chakra-ui/react'
import Equipment from '../header/menu/Equipment';
import Item from '../header/menu/Item';
import Exm  from '../exm/Exm'
// import {HamburgerIcon} from '@chakra-ui/icons'
const Navbbar = () => {
  
    return(
    <>
   <Box bg='tomato' w='100%' p={4} color='white'>
  This is the Box
</Box>
        <Grid templateColumns='repeat(11, 1fr)' >
          {/* <Link  >
          <GridItem w='70px' h='10' bg='blue.500' ><Item1/></GridItem>
          </Link>
       
          <Link  >
          <GridItem w='70px' h='10' bg='blue.500' ><Item2/></GridItem>
          </Link>
          <Link  >
          <GridItem w='70px' h='10' bg='blue.500' ><Item3/></GridItem>
          </Link>
          <Link  >
          <GridItem w='70px' h='10' bg='blue.500' ><Item4/></GridItem>
          </Link>
          <Link  >
          <GridItem w='70px' h='10' bg='blue.500' ><Item5/></GridItem>
          </Link>
          <Link  >
          <GridItem w='70px' h='10' bg='blue.500' ><Item6/></GridItem>
          </Link> */}
             <Link  >
          <GridItem w='70px' h='10' bg='blue.500' ><Exm/></GridItem>
          </Link>
          <Link  ></Link>
          <Link  >
          <GridItem w='70px' h='10' bg='blue.500' ><Equipment/></GridItem>
          </Link>
          <Link  >
          <GridItem w='70px' h='10' bg='blue.500' ><Item/></GridItem>
          </Link>
          <Link to='/code' >
          <GridItem w='70px' h='10' bg='blue.500' ><Idcode/></GridItem>
          </Link>
          <Link  to="/management">
          <GridItem w='90px' h='10' bg='blue.500' >مدیریت درخواست</GridItem>
          </Link>
          <Link to='/map' >
          <GridItem w='70px' h='10' bg='blue.500' >نمایش نقشه</GridItem>
          </Link>
       
      </Grid>
      </>
)

}

export  default Navbbar