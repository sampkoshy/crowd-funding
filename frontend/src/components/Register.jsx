// import React, { useState } from 'react';
// import axios from 'axios';
// import './Register.css';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [aadhar, setAadhar] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');




//   //updated at 11 20
//   const registerData = async (e) => {
//     e.preventDefault(); // Prevent page reload
  
//     // Basic validation before sending data
//     if (!name || !email || !phone || !aadhar || !password) {
//       setMessage("❌ All fields are required!");
//       return;
//     }
//     if (!/^\d{10}$/.test(phone)) {
//       setMessage("❌ Phone number must be exactly 10 digits.");
//       return;
//     }
//     if (!/^\d{12}$/.test(aadhar)) {
//       setMessage("❌ Aadhar number must be exactly 12 digits.");
//       return;
//     }
//     if (password.length < 3) {
//       setMessage("❌ Password must be at least 6 characters long.");
//       return;
//     }
  
//     try {
//       console.log("Sending data to server:", { name, email, phone, aadhar, password });
  
//       const response = await axios.post("http://localhost:3000/api/register/register", {
//         name, email, phone, aadhar, password
//       }, {
//         headers: { "Content-Type": "application/json" },
//       });
  
//       setMessage("✅ Registration Successful!");
//       console.log("Server Response:", response.data);
//     } catch (error) {
//       console.error("❌ Registration Error:", error.response || error);
//       setMessage(error.response?.data?.message || "❌ Registration Failed. Try again.");
//     }
//   };
  

//   return (
//     <div className="container">
//       <form onSubmit={registerData} className="register-form">
//         <h2>Register</h2>
//         {message && <p className="message">{message}</p>}
        
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         </div>

//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>

//         <div className="form-group">
//           <label>Phone Number</label>
//           <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//         </div>

//         <div className="form-group">
//           <label>Aadhar Number</label>
//           <input type="text" value={aadhar} onChange={(e) => setAadhar(e.target.value)} required />
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>

//         <button type="submit" className="submit-btn">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
//navigate to login


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // ✅ Initialize navigate function

  const registerData = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      console.log("Sending data to server:", { name, email, phone, aadhar, password });

      const response = await axios.post("http://localhost:3000/api/register/register", {
        name, email, phone, aadhar, password
      });

      setMessage("✅ Registration Successful!");
      console.log("Server Response:", response.data);

      // ✅ Redirect to login page after successful registration
      setTimeout(() => {
        navigate("/login"); 
      }, 2000); // Optional delay for user to see success message

    } catch (error) {
      console.error("❌ Registration Error:", error.response || error);
      setMessage(error.response?.data?.message || "❌ Registration Failed. Try again.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={registerData} className="register-form">
        <h2>Register</h2>
        {message && <p className="message">{message}</p>}
        
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Aadhar Number</label>
          <input type="text" value={aadhar} onChange={(e) => setAadhar(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
