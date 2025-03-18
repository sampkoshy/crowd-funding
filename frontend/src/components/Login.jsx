

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './login.css';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault(); // Prevent page reload

//     try {
//       let response;

//       if (email === "admin@gmail.com" && password === "admin") {
//         // ✅ Admin Login
//         response = await axios.post("http://localhost:4000/api/register/admin/login", { email, password });

//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("userRole", "admin");

//         setMessage("✅ Admin Login Successful!");
//         navigate("/AdminHome"); // Redirect to Admin Dashboard

//       } else {
//         // ✅ User Login
//         response = await axios.post("http://localhost:4000/api/register/login", { email, password });

//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("userRole", "user");

//         setMessage("✅ User Login Successful!");
//         navigate("/UserHome"); // Redirect to User Dashboard
//       }

//       console.log("Login Response:", response.data);
//     } catch (error) {
//       setMessage(error.response?.data?.message || "❌ Login Failed. Check credentials.");
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleLogin}>
//         <h2>Login</h2>
//         {message && <p className="message">{message}</p>}

//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Login</button>

//         <p>
//           Don't have an account? <Link to="/Register">Create an account</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './login.css';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       let response;

//       if (email === "admin@gmail.com" && password === "admin") {
//         response = await axios.post("http://localhost:4000/api/register/admin/login", { email, password });

//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("userRole", "admin");
        

//         setMessage("✅ Admin Login Successful!");
//         navigate("/AdminHome");

//       } else {
//         response = await axios.post("http://localhost:4000/api/register/login", { email, password });

//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("userRole", "user");
        
//         localStorage.setItem("userId", response.data.user._id); // ✅ Store userId

//         setMessage("✅ User Login Successful!");

//         // ✅ Restore pending campaign after login
//         const pendingCampaign = localStorage.getItem("pendingCampaign");

//         if (pendingCampaign) {
//           const campaignData = JSON.parse(pendingCampaign);
//           localStorage.removeItem("pendingCampaign"); // Remove after use
//           navigate("/donate", { state: { campaign: campaignData } });
//         } else {
//           navigate("/UserHome"); // Default redirect if no campaign is stored
//         }
//       }

//       console.log("Login Response:", response.data);
//     } catch (error) {
//       setMessage(error.response?.data?.message || "❌ Login Failed. Check credentials.");
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleLogin}>
//         <h2>Login</h2>
//         {message && <p className="message">{message}</p>}

//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit" disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </button>

//         <p>
//           Don't have an account? <Link to="/Register">Create an account</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;



// to store name in userhome 12 30
 
// amal bro set akki code


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";


import axios from "axios";
import "./login.css";

const Login = () => {
  const [searchParams] = useSearchParams();
  const campaignId = searchParams.get('id');
  console.log(campaignId)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response;

      if (email === "admin@gmail.com" && password === "admin") {
        // ✅ Admin Login API Call
        response = await axios.post("http://localhost:4000/api/register/admin/login", { email, password,  });

        // ✅ Store Admin Data
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userRole", "admin");

        setMessage("✅ Admin Login Successful!");
        navigate("/AdminHome");

      } else {
        // ✅ User Login API Call
        response = await axios.post("http://localhost:4000/api/register/login", { email, password,campaignId });
        console.log(response)

        // ✅ Store User Data in LocalStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userRole", "user");
        localStorage.setItem("userId", response.data.user._id); 
        localStorage.setItem("userName", response.data.user.name); // ✅ Store User Name

        setMessage("✅ User Login Successful!");

        // ✅ Check for Pending Campaign
        const pendingCampaign = localStorage.getItem("pendingCampaign");

        if (pendingCampaign) {
          const campaignData = JSON.parse(pendingCampaign);
          localStorage.removeItem("pendingCampaign"); 
          navigate("/donate", { state: { campaign: campaignData } });
        } else {
          console.log(response,'dddddd')
          console.log(response.data.campaignId, 'heyeyyeyeyeyeyyeyeyeyey')
          navigate("/UserHome",{state :{id:response.data.campaignId}}); // ✅ Default Redirect to User Home
        }
      }

      console.log("📌 Login Response:", response.data);
    } catch (error) {
      setMessage(error.response?.data?.message || "❌ Login Failed. Check credentials.");
      console.error("🚨 Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {message && <p className="message">{message}</p>}

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btm" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p > 
          Don't have an account? <Link to="/Register" style={{ textDecoration: "none", color: "inherit" }}>
          <span className="log-re"> Create an account</span></Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

