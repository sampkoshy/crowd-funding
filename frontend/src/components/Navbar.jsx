import React from "react";
import cha from '../assets/cha.webp'
import { Link } from "react-router-dom";



import "./navabar.css";

const Navbar = () => {
  return (
    <div className="navbar">
    <Link to='./Home' style={{ textDecoration: "none", color: "inherit" }}>   <div className="nav-sec">
      
        <img src={cha} alt="charity"  className="nav-img"/>
       
      
        </div> </Link>
      <div className="nav-sec1">
        <ul>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}><li>Home</li></Link>
          <li></li>
         
         <Link to='/About' style={{ textDecoration: "none", color: "inherit" }}><li>About</li></Link> 
          <Link to="/Contact" style={{ textDecoration: "none", color: "inherit" }}><li>Contact</li></Link>
        </ul></div>
        <Link to='/Donate' style={{ textDecoration: "none", color: "inherit" }}> 
     <div className="nav-sec2">
  <i className="fa-regular fa-heart"></i>
  <span>Donate</span>
</div></Link>
<div className="nav-lo">
  <Link to ='/Login' style={{ textDecoration: "none", color: "inherit" }}><span>Login</span></Link>
</div>
    </div>
  );
};

export default Navbar;
