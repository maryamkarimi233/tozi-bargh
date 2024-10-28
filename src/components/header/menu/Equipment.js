import React, { useState } from 'react';
// import './select.css';
import { Box ,Grid
  ,GridItem} from '@chakra-ui/react';

const SelectInputPage = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem w='80px' h='10' bg='blue.500'>
  <Box>
      <h1>نوع تجهیز</h1>
      <select value={value} onChange={handleChange} className="select-input">
        <option value="" >انتخاب کنید</option>
        <option value="option1">گزینه ۱</option>
        <option value="option2">گزینه ۲</option>
        <option value="option3">گزینه ۳</option>
      </select>
      {value && <p>انتخاب شما: {value}</p>}
    </Box>
  </GridItem>

</Grid>
   
  );
};

export default SelectInputPage;
