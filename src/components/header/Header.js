import React, { useEffect, useState } from 'react';
import { format } from 'date-fns-jalali';
import { Link } from 'react-router-dom';
import './Header.css';
import { Box, Grid, GridItem } from '@chakra-ui/react'

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = format(dateTime, 'yyyy/MM/dd');
  const formattedTime = dateTime.toLocaleTimeString('fa-IR');

  return (
    <>
    <Box>
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
    <GridItem w='100%' h='10'className="datetime" bg='blue.500'>
      <Box 
       className="date">{formattedDate}{formattedTime}
      </Box>
    </GridItem>
    <GridItem w='100%' h='10' bg='blue.500' className="navbar-title">
      <Box>        <h1>عنوان صفحه</h1>
      </Box>
      </GridItem> 
    <GridItem w='100%' h='10' bg='blue.500'className="navbar-logo" >
    <Link to="/">لوگو</Link>
    </GridItem>
   
  </Grid>

  </Box>
  </>
  );
};

export default Header;
