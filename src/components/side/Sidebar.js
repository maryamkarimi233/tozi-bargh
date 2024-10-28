import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleSubmenu = (item) => {
    setSubmenuOpen(prevState => ({
      ...prevState,
      [item]: !prevState[item]
    }));
  };

  return (
    <div className="sidebar">
      <ul>
        {/* <li>
          <Link to="/">دسترسی اسان</Link>
        </li> */}
        <li>
          <a href="#" onClick={() => toggleSubmenu('net')}>
            سامانه نت
          </a>
          
          <ul className={`submenu ${submenuOpen['net'] ? 'open' : ''}`}>
          <li>
          <Link to="/">اطلاعات پایه مربوط به  تجهیزات شبکه </Link>
        </li>
             <li><Link to="/net/reportnet1">به روز رسانی چک لیست </Link></li> 
            <li><Link to="/visitation">بازدید </Link></li>
            <li><Link to="/net/reportnet3">تعمیرات </Link></li> 
            <li><Link to="/net/reportnet4">ساختن های بهربرداری     </Link></li>
            <li><Link to="/net/reportnet5">انتقال از کامپیوتر به دستگاه     </Link></li>
            <li><Link to="/net/reportnet6">انتقال از دستگاه  به کامپیوتر </Link></li>
          </ul>
        </li>
        
        <li>
          <a href="#" onClick={() => toggleSubmenu('locationsystem')}>
            سیستم مکانی
          </a>
          <ul className={`submenu ${submenuOpen['locationsystem'] ? 'open' : ''}`}>
            <li><Link to="/locationsystem/reportsystem1"> جستجوی سیستم مکانی</Link></li>
            <li><Link to="/locationsystem/reportsystem2">  فراوانی خرابی</Link></li>
            <li><Link to="/locationsystem/reportsystem3">  فراوانی تعمیرات</Link></li>
            <li><Link to="/locationsystem/reportsystem4">   گزارش بازدید</Link></li>
            <li><Link to="/locationsystem/reportsystem5">  بازدید </Link></li>
            <li><Link to="/locationsystem/reportsystem6">  نمایش 5 نقطه  ب روی نقشه </Link></li>
          </ul>
        </li>
      
        <li>
          <a href="#" onClick={() => toggleSubmenu('visitation')}>
 بازدید CBM            
          </a>
          <ul className={`submenu ${submenuOpen['visitation'] ? 'open' : ''}`}>
            <li><Link to="/visitation/reportvisit1"> گزارشات</Link></li>
            <li><Link to="/visitation/reportvisit2"> پروژه لیست</Link></li>
            <li><Link to="/visitation/reportvisit3"> پروژه </Link></li>  
             <li><Link to="/visitation/reportvisit4"> اطلاعات پروژه </Link></li>
             <li><Link to="/visitation/reportvisit5">  گزارش عملکرد</Link></li>   
             <li><Link to="/visitation/reportvisit">  تغییر وضعیت</Link></li>

          </ul>

        </li>
           <li>
          <a href="#" onClick={() => toggleSubmenu('gis')}>
    سامانه مبتنی بر  GIS
          </a>
          <ul className={`submenu ${submenuOpen['gis'] ? 'open' : ''}`}>
            <li><Link to="/gis/reportgis1"> جستجوی سیستم مکانی</Link></li>
            <li><Link to="/gis/reportgis2">  فراوانی خرابی</Link></li>
            <li><Link to="/gis/gis8">  فراوانی تعمیرات</Link></li>
            <li><Link to="/gis/gis3">   گزارش بازدید</Link></li>
            <li><Link to="/gis/gis5">  بازدید </Link></li>
            <li><Link to="/gis/gis6">  نمایش 5 نقطه  ب روی نقشه </Link></li>
          </ul>
        </li>
      
      </ul>
    </div>
  );
};

export default Sidebar;
