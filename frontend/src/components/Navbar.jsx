import React from "react";
import { Link } from "react-router-dom";


import "./navabar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-sec">
        <img src="" alt="Logo" />
      </div>
      <div className="nav-sec1">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <li>Career</li>
         
         <Link to='/About'><li>About</li></Link> 
          <Link to="/Contact"><li>Contact</li></Link>
        </ul></div>
        <Link to='/Donate'> 
     <div className="nav-sec2">
  <i className="fa-regular fa-heart"></i>
  <span>Donate</span>
</div></Link>
<div>
  <Link to ='/Login'><span>Login</span></Link>
</div>
    </div>
  );
};

export default Navbar;
