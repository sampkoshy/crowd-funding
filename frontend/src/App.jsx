import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import About from './Routes/About';
import Donate from './components/Donate';
import Login from './components/Login';
import Register from './components/Register';
import UserHome from './user/UserHome'
import AdminCreateCampaign from './admin/AdminCreateCampain';
import AdminHome from './admin/AdminHome';  // ✅ Import AdminHome
import Carol from './other-components/Carol';

const App = () => {
  const location = useLocation(); // ✅ Get current route

  // ✅ Hide Navbar on Admin pages
  const showNavbar = location.pathname !== "/AdminHome";

  return (
    <div>
      {showNavbar && <Navbar />} {/* ✅ Navbar only shows on non-admin pages */}
      {/* <Carol/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Donate' element={<Donate />} />
        <Route path='/UserHome'element={<UserHome/>}/>
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/AdminHome' element={<AdminHome />} /> 
        <Route path='Home'element={<Home/>}/>
        <Route path='/AdminCreateCampain' element={<AdminCreateCampaign />} />
      </Routes>
    </div>
  );
};

export default App;
