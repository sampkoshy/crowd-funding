// import React from "react";
// import charity from '../assets/charity.png'
// import { Link } from "react-router-dom";



// import "./navabar.css";

// const Navbar = () => {
//   return (
//     <div className="navbar1">
//     <Link to='./Home' style={{ textDecoration: "none", color: "inherit" }}>   <div className="nav-sec">
      
//         <img src={charity} alt="charity"  className="nav-img"/>
       
      
//         </div> </Link>
//       <div className="nav-sec1">
//         <ul>
//           <Link to="/" style={{ textDecoration: "none", color: "inherit" }}><li>Home</li></Link>
          
         
//          <Link to='/About' style={{ textDecoration: "none", color: "inherit" }}><li>About</li></Link> 
//           <Link to="/Contact" style={{ textDecoration: "none", color: "inherit" }}><li>Contact</li></Link>
//         </ul></div>
//         <Link to='/Donate' style={{ textDecoration: "none", color: "inherit" }}> 
//      <div className="nav-sec2">
//   <i className="fa-regular fa-heart"></i>
//   <span>Donate</span>
// </div></Link>
// <div className="nav-lo">
//   <Link to ='/Login' style={{ textDecoration: "none", color: "inherit" }}><span>Login</span></Link>
// </div>
//     </div>
//   );
// };

// export default Navbar;



import React from "react";
import { Link, useLocation } from "react-router-dom";
import charity from "../assets/charity.png";
import "./navabar.css";

const Navbar = () => {
  const location = useLocation();
  console.log("Current Path:", location.pathname);

  // ✅ Hide Login button on UserHome and Donate pages
  const hideLogin = location.pathname.includes("/UserHome") || location.pathname.includes("/donate");


  
  return (
    <div className="navbar1">
      {/* Logo Section */}
      <Link to="/Home" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="nav-sec">
          <img src={charity} alt="charity" className="nav-img" />
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="nav-sec1">
        <ul>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <li>Home</li>
          </Link>
          <Link to="/About" style={{ textDecoration: "none", color: "inherit" }}>
            <li>About</li>
          </Link>
          <Link to="/Contact" style={{ textDecoration: "none", color: "inherit" }}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      {/* Donate Button */}
      <Link to="/Home" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="nav-sec2">
          <i className="fa-regular fa-heart"></i>
          <span>Donate</span>
        </div>
      </Link>

      {/* ✅ Hide Login button on UserHome and Donate */}
      {!hideLogin && (
        <div className="nav-lo">
          <Link to="/Login" style={{ textDecoration: "none", color: "inherit" }}>
            <span>Login</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
