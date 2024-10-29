
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Box} from '@chakra-ui/react'
import Login from './components/login/Login';
import Signin from './components/sign/Signin';


import Data from './components/data/Data';
// import Map from './components/header/map/Map';
function App() {
  return (
   
    <>
   <Box id="container">
    <Box  className="main">
   <Routes>
       
        <Route path="/" element={<Login />} />
        <Route path="/sign/*" element={<Signin />} />
      
      </Routes>
     
      </Box>
      </Box>
   </>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route ,useLocation  ,} from 'react-router-dom';
// 
// import Settings from './components/Settings';
// import Profile from './components/Profile';
// import { Box ,Flex ,Spacer } from '@chakra-ui/react';
// import Tree from './components/tree/Tree';
// import Navbar from './components/nav/Navbar'
// import  Data from './components/data/Data';


// import ID from  './components/id/ID'


// import  Contact from './components/Contact';
// // import Header from './components/header/Header';
// import Menu from './components/header/menu/Menu';
// import Nav from './components/nav/Nav';
// import Map from './components/header/map/Map';
// import Management from './components/managmentrequest/Managesystem';
// import Input from './components/input/Input';
// import Net from './components/side/net/Net';
// import LocationSystem from './components/side/System/LocationSystem';
// import DailyReport from './components/DailyReport';
// import Reportnet1 from  './components/side/net/Reportnet1';
// import MonthlyReport from './components/MonthlyReport';
// import UserList from './components/UserList';
// import AddUser from './components/AddUser';
// import Visitation from './components/side/visit/Visitation';
// import Reportnet2 from  './components/side/net/Reportnet2';
// import Reportnet3 from  './components/side/net/Reportnet3';
// import Reportnet4 from  './components/side/net/Reportnet4';
// import Reportnet5 from  './components/side/net/Reportnet5';
// import Reportnet6 from  './components/side/net/Reportnet6';
// import Reportsystem1 from './components/side/System/Reportsystem1';
// import Reportsystem2 from './components/side/System/Reportsystem2';
// import Reportsystem3 from './components/side/System/Reportsystem3';
// import Reportsystem4 from './components/side/System/Reportsystem4';
// import Reportsystem5 from './components/side/System/Reportsystem5';
// import Reportsystem6 from './components/side/System/Reportsystem6';
// import Reportvisit1 from './components/side/visit/Reportvisit1';
// import Reportvisit2 from './components/side/visit/Reportvisit2';
// import Reportvisit3 from './components/side/visit/Reportvisit3';
// import Reportvisit4 from './components/side/visit/Reportvisit4';
// import Reportvisit5 from './components/side/visit/Reportvisit5';
// import Reportvisit from './components/side/visit/Reportvisit';
// import Gis from './components/side/Gis/Gis';
// import Gis3 from './components/side/Gis/Gis3';
// import Gis5 from './components/side/Gis/Gis5';
// import Gis6 from './components/side/Gis/Gis6';
// import Gis8 from './components/side/Gis/Gis8';
// import Idcode from './components/header/menu/Idcode'
// import Reportsystem  from './components/reportsystem/Reportsystem'
// import Systemmanage  from './components/SystemManagemant/Systemmanege';
// import ReportGis1 from './components/side/Gis/ReportGis1';
// import  ReportGis2 from './components/side/Gis/ReportGis2';
// import Option1 from './components/select/Option1';
// import Option2 from'./components/select/Option2';
// import Option3 from './components/select/Option3';
// import Service from './components/Service';
// import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
// import Page4 from './components/Page4';
// import Page5 from './components/Page5';
// import Page6 from './components/Page6';
// import Page7 from './components/Page7';
// import Page8 from './components/Page8';
// import Page9 from './components/Page9';
// import Page10 from './components/Page10';
// import Page11 from './components/Page11';
// // import './App.css'
// import Menuitem from './components/Menuitem/Menuitem';
// import Header  from './components/header/Header'
// import Exm from './components/exm/Exm';
// import Page1_1 from './components/Page1_1';
// import Page1_2 from './components/Page1_2';
// import Page1_3 from './components/Page1_3';
// import Page1_4 from './components/Page1_4';
// // اضافه کردن مسیرهای دیگر به همین شکل
// import Page2_1 from './components/Page2_1';
// import Page2_2 from './components/Page2_2';
// import Page2_3 from './components/Page2_3';
// import Page2_4 from './components/Page2_4';
// import About from './components/About';
// import Login from './components/login/Login';
// import SignIn from './components/Signin';

// function App() {


 
//   return (
// <>
//  <Box p='4' id="main">
// <Header/>
// <Spacer  h={'20px'} bg="yellow.200"/>
// <Navbar/> 

// <Flex>
//   <Box p='4'   className="right-side">
//      <Sidebar/>  
  
//   </Box>  
  
//   <Spacer />
//   <Box p='4' className='main'>
//   <div  className='main-content '> 
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/settings" element={<Settings />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/data" element={<Data />} />
//             <Route path="/contact" element={<Contact />} />
// <Route path="/managment"  element={<Management/>}/>
//             <Route path="/map" element={<Map />} />
//             <Route path="/input" element={<Input />} />
//             <Route path="/" element={<Home />} />
//             <Route path="/net" element={<Net />} />
//             <Route path="/locationsystem" element={<LocationSystem />} />
//             <Route path="/settings" element={<Settings />} />
//             <Route path="/visitation" element={<Visitation />} />
//              <Route path="/Net/daily" element={<DailyReport />} />
//             <Route path="/Net/reportnet1" element={<Reportnet1/>} />
//             <Route path="/Net/reportnet2" element={<Reportnet2/>} />
//              <Route path="/Net/reportnet3" element={<Reportnet3/>} /> 
//              <Route path="/Net/reportnet4" element={<Reportnet4/>} /> t
//              <Route path="/Net/reportnet5" element={<Reportnet5/>} />
//             <Route path="/Net/reportnet6" element={<Reportnet6/>} />
//             {/* <Route path="/item1"  element={<Item1/>}/> */}
//             {/* <Route path="/item2"  element={<Item2/>}/>    */}
//                      {/* <Route path="/item3"  element={<Item3/>}/>         */}
//                 {/* <Route path="/item4"  element={<Item4/>}/>      */}
//                 <Route path="/page7" element={<Page7/>} />
//           <Route path="/page8" element={<Page8/>} />
//           <Route path="/page9" element={<Page9/>} />
//           <Route path="/page10" element={<Page10/>} />
//           <Route path="/page11" element={<Page11/>} />
//           <Route path="/about" element={<About/>} />
//                        {/* <Route path="/item5"  element={<Item5/>}/>   */}
//                                  {/* <Route path="/item6"  element={<Item6/>}/> */}
// <Route path='/locationSystem/reportsystem1' element={<Reportsystem1/>} />
// <Route path='/locationSystem/reportsystem2' element={<Reportsystem2/>} />
// <Route path='/locationSystem/reportsystem3' element={<Reportsystem3/>} />
// <Route path='/locationSystem/reportsystem4' element={<Reportsystem4/>} />
// <Route path='/locationSystem/reportsystem5' element={<Reportsystem5/>} />
// <Route path='/locationSystem/reportsystem6' element={<Reportsystem6/>} />
// <Route path='/visitation/reportvisit1' element={<Reportvisit1/>} />
// <Route path='/visitation/reportvisit2' element={<Reportvisit2/>} />
// <Route path='/visitation/reportvisit3' element={<Reportvisit3/>} />
// <Route path='/visitation/reportvisit5' element={<Reportvisit5/>} />
// <Route path='/visitation/reportvisit4' element={<Reportvisit4/>} />
// <Route path='/visitation/reportvisit' element={<Reportvisit/>} />
// <Route path="/gis" element={<Gis/>} />
// <Route path='/gis3' element={<Gis3/>} />
// <Route path='/gis6' element={<Gis6/>} />
// <Route path='/gis8' element={<Gis8/>} />
// <Route path='/gis8' element={<Gis8/>} />
// <Route path="/option1" element={<Option1 />} />
//             <Route path="/option2" element={<Option2 />} />
//             <Route path="/option3" element={<Option3 />} />
// <Route path='/id'  element={<ID/>}/>
// <Route path='/service'  element={<Service/>}/>
// <Route path='/systemmanage'  element={<Systemmanage/>}/>
// <Route path='/reportsystem'  element={<Reportsystem/>}/>
// {/* <Route path="/time" element={<Time/>} /> */}
// <Route path="/page1" element={<Page1/>} />
//             <Route path="/page2" element={<Page2/>} />
//             <Route path="/page3" element={<Page3/>} />
//             <Route path="/page4" element={<Page4/>} />
//             <Route path="/page5" element={<Page5/>} />
//             <Route path="/page6" element={<Page6/>} />
//             <Route path="/Net/monthly" element={<MonthlyReport />} />
//             <Route path="/LocationSystem/list" element={<UserList />} />
//             <Route path="/LocationSystem/add" element={<AddUser />} />
//             <Route path="/service" element={<Service />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route  path="/code" element={<Idcode/>}/>
//             <Route path="/page1-1" element={<Page1_1 />} />
//             <Route path="/page1-2" element={<Page1_2/>} />
//             <Route path="/page1-3" element={<Page1_3/>} />
//             <Route path="/page1-4" element={<Page1_4/>} />
//             <Route path="/page2-1" element={<Page2_1/>} />
//             <Route path="/page2-2" element={<Page2_2/>} />
//             <Route path="/page2-3" element={<Page2_3/>} />
//             <Route path="/page2-4" element={<Page2_4/>} />
//             <Route path="/" element={<Login />} />
//             <Route path="/sing" element={<SignIn />} />
//           </Routes>
//         </div>
//   </Box>
//   <Spacer />
//   <Box p='4'   className="left-side">
//     <Tree/>
//   </Box>
// </Flex>
//  {/* <Nav/>    */}
// {/* <Menuitem/>  */}
// {/* <Side/> */}
// {/* <Exm/> */}
// <SignIn/>
// </Box>
   
    
//       </>
  
    
 
//   );
// }

// export default App;
