import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Data.css';

const Data = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const path = event.target.value;
    setSelectedOption(path);
    navigate(path);
  };

  return (
    <div className="select-container">
      <select className="nav-select" value={selectedOption} onChange={handleSelectChange}>
        <option value="">اطلاعات پایه </option>
        <option value="/page1">گزینه ۱</option>
        <option value="/page2">گزینه ۲</option>
        <option value="/page3">گزینه ۳</option>
      </select>
    </div>
  );
};

export default Data;
