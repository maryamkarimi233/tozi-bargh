import React, { useState } from 'react';
import './Input.css';

const Input = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>انتخاب</h1>
      <select value={value} onChange={handleChange} className="select-input">
        <option value="">انتخاب کنید</option>
        <option value="option1">گزینه ۱</option>
        <option value="option2">گزینه ۲</option>
        <option value="option3">گزینه ۳</option>
      </select>
      {value && <p>انتخاب شما: {value}</p>}
    </div>
  );
};

export default Input;
