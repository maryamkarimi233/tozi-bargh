
import React from 'react'
import {Routes , Route} from 'react-router-dom'
import './sign.css'
import Navbar from '../nav/Navbar'
 import Content from '../Content'
import {Box ,Flex ,Center ,Text  ,Square} from '@chakra-ui/react'
import  Header  from '../header/Header'
import Map from '../header/map/Map'
import Home from '../Home'
import Data from '../data/Data'
const Signin = () => {
  return (
  <Box  id="sign-container">
    <Box bg='tomato' w='100%' p={4} color='white'>
<Header/>
</Box>
<spacer/>
<Box bg='blue' w='100%' p={4} color='white'>
<Navbar/>
</Box>
<Flex color='white'className="sign-body">
  <Center  bg='green.500' className="left-side">
    <Text>Box 1</Text>
  </Center>
  <Square bg='blue.500' className="sign-main">
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map/>} />
          <Route path="/data" element={<Data/>}/>
        </Routes> 
  </Square>
  <Center  bg='green.500' className="right-side">
    <Text>Box 1</Text>
  </Center>
 
</Flex>
<Box bg='tomato' w='100%' p={4} color='white'>
footer
</Box>
  </Box>

  )
}

export default Signin