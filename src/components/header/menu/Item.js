
import React ,{useState} from 'react';
import { useNavigate} from 'react-router-dom';
const Equipment = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
  
    const handleSelectChange = (e) => {
      setValue(e.target.value);
      navigate(e.target.value);
    };
  return (
    <div>
           <ul className="nav-menu">
           
           <li className="nav-item">
           <select value={value} onChange={handleSelectChange} className="select-input">
             <option value="">  انتخاب کنید</option>
             <option value="/option1">گزینه ۱</option>
             <option value="/option2">گزینه ۲</option>
             <option value="/option3">گزینه ۳</option>
           </select>
         </li>
         </ul>
    </div>
  )
}

export default Equipment