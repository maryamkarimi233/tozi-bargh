import React from 'react'
import { Stack,Box, HStack,Flex, VStack } from '@chakra-ui/react'
import Item1 from './Item1'
import Item2 from './Item2'
import Item3 from './Item3';
import Item4 from './Item4';
import Item5 from './Item5';
import Item6 from './Item6'
import Equipment from '../header/menu/Equipment';
import Item from 'antd/es/list/Item';
import Idcode from '../header/menu/Idcode';
import Management from '../managmentrequest/Managesystem';
const Menuitem = () => {
  return (
   
    <Box bg='tomato' w='100%' p={4} color='white' id="menu">
    <Flex  className="menu">
    <Box bg='tomato' w='100%'  color='white'>
    <Item1/>
  </Box>
  <Box bg='tomato' w='100%'  color='white'>
    <Item2/>
  </Box><Box bg='tomato' w='100%' color='white'>
    <Item3/>
  </Box><Box bg='tomato' w='100%'  color='white'>
  <Item4/>
  </Box><Box bg='tomato' w='100%'  color='white'>
  <Item5/>
  </Box><Box bg='tomato' w='100%' color='white'>
  <Item6/>
  </Box><Box bg='tomato' w='100%'  color='white'>
    <Equipment/>
  </Box><Box bg='tomato' w='100%'  color='white'>
    <Item/>
  </Box>
  <Box bg='tomato' w='100%'  color='white'>
    <Idcode/>
  </Box>
  <Box bg='tomato' w='100%'  color='white'>
    <Management/>
  </Box>
  <Box bg='tomato' w='100%'  color='white'>
    
  </Box>
  </Flex>
  </Box>
 
  )
}

export default Menuitem