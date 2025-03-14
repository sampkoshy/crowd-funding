// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import "./donate.css";

// const Donate = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const campaign = location.state?.campaign;

//   const [amount, setAmount] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiryMonth, setExpiryMonth] = useState("");
//   const [expiryYear, setExpiryYear] = useState("");
//   const [cvv, setCvv] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simulate payment processing
//     setTimeout(() => {
//       alert(`✅ Payment of $${amount} successful for ${campaign?.title}`);

//       // Store donated campaign in local storage
//       let donatedCampaigns = JSON.parse(localStorage.getItem("donatedCampaigns")) || [];
//       donatedCampaigns.push(campaign);
//       localStorage.setItem("donatedCampaigns", JSON.stringify(donatedCampaigns));

//       // Redirect to User Home Page
//       navigate("/UserHome");
//     }, 1000);
//   };

//   return (
//     <div className="donate-container1">
//       {/* Header Section with Image */}
//       <div className="donate-header">
//         {campaign?.image && (
//           <img className="donate-image" src={campaign.image} alt={campaign.title} />
//         )}
//         <h2>Donate to {campaign?.title || "Campaign"}</h2>
//         <h3>Donate today and get involved to save the world</h3>
//         <p>{campaign?.description || "No description available."}</p>
//         <p><strong>Goal:</strong> ${campaign?.goal?.toLocaleString()}</p>
//         <p><strong>Raised:</strong> ${campaign?.raised?.toLocaleString()}</p>
//       </div>

//       {/* Donation Form */}
//       <div className="donate-form">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Amount</label>
//             <input 
//               type="number" 
//               placeholder="Enter amount" 
//               min="1" 
//               value={amount} 
//               onChange={(e) => setAmount(e.target.value)} 
//               required 
//             />
//           </div>

//           <div className="form-group">
//             <label>Card Number</label>
//             <input 
//               type="text" 
//               placeholder="Valid card number" 
//               maxLength="16" 
//               value={cardNumber} 
//               onChange={(e) => setCardNumber(e.target.value)} 
//               required 
//             />
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Expiration Date</label>
//               <input 
//                 type="text" 
//                 placeholder="MM" 
//                 maxLength="2" 
//                 value={expiryMonth} 
//                 onChange={(e) => setExpiryMonth(e.target.value)} 
//                 required 
//               />
//               <input 
//                 type="text" 
//                 placeholder="YY" 
//                 maxLength="2" 
//                 value={expiryYear} 
//                 onChange={(e) => setExpiryYear(e.target.value)} 
//                 required 
//               />
//             </div>
//             <div className="form-group">
//               <label>CVV</label>
//               <input 
//                 type="text" 
//                 placeholder="CVV" 
//                 maxLength="3" 
//                 value={cvv} 
//                 onChange={(e) => setCvv(e.target.value)} 
//                 required 
//               />
//             </div>
//           </div>

//           <div className="form-button">
//             <button type="submit">Pay Now</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// // export default Donate;import React, { useState, useEffect } from 'react';
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Donate = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // ✅ Retrieve campaign safely
//   const [campaign, setCampaign] = useState(null);
//   const [user, setUser] = useState(null);
//   const [amount, setAmount] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiryMonth, setExpiryMonth] = useState("");
//   const [expiryYear, setExpiryYear] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // ✅ Retrieve selected campaign correctly
//     let selectedCampaign = location.state?.campaign || JSON.parse(localStorage.getItem("selectedCampaign"));

//     if (selectedCampaign) {
//       setCampaign(selectedCampaign);
//     } else {
//       console.error("No campaign data found!");
//       alert("Error fetching campaign details.");
//       navigate("/UserHome");
//     }
//   }, [navigate, location]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user || !campaign) {
//       alert("Invalid user or campaign data.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:3000/api/donations/donate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           userId: user._id,
//           campaignId: campaign._id,
//           amount,
//           cardNumber,
//           expiryMonth,
//           expiryYear,
//           cvv,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert(`✅ Payment of $${amount} successful for ${campaign.title}`);

//         // ✅ Save the donated campaign in localStorage
//         let donatedCampaigns = JSON.parse(localStorage.getItem("donatedCampaigns")) || [];
//         donatedCampaigns.push(campaign);
//         localStorage.setItem("donatedCampaigns", JSON.stringify(donatedCampaigns));

//         // ✅ Remove selectedCampaign from localStorage
//         localStorage.removeItem("selectedCampaign");

//         // ✅ Redirect to UserHome
//         navigate("/UserHome");
//       } else {
//         alert(`❌ Donation failed: ${data.message}`);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("❌ An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!campaign) {
//     return <h2>Campaign details not found!</h2>;
//   }

//   return (<div className="donate-container1">
//     <h2>Donate to {campaign.title}</h2>
//     <div className="campaign-card">
//         <img src={campaign.image} alt={campaign.title} />
//         <h3>{campaign.title}</h3>
//         <p>{campaign.description}</p>
//         <p><strong>Goal:</strong> ${campaign.goal}</p>
//       </div>
//     <form className="donate-form" onSubmit={handleSubmit}>
      
//       <div className="form-group">
//         <label>Amount</label>
//         <input 
//           type="number" 
//           value={amount} 
//           onChange={(e) => setAmount(e.target.value)} 
//           required 
//         />
//       </div>
  
//       <div className="form-group">
//         <label>Card Number</label>
//         <input 
//           type="text" 
//           value={cardNumber} 
//           onChange={(e) => setCardNumber(e.target.value)} 
//           required 
//         />
//       </div>
  
//       <div className="form-row">
//         <div className="form-group">
//           <label>Expiry Month</label>
//           <input 
//             type="text" 
//             value={expiryMonth} 
//             onChange={(e) => setExpiryMonth(e.target.value)} 
//             required 
//           />
//         </div>
  
//         <div className="form-group">
//           <label>Expiry Year</label>
//           <input 
//             type="text" 
//             value={expiryYear} 
//             onChange={(e) => setExpiryYear(e.target.value)} 
//             required 
//           />
//         </div>
//       </div>
  
//       <div className="form-group">
//         <label>CVV</label>
//         <input 
//           type="text" 
//           value={cvv} 
//           onChange={(e) => setCvv(e.target.value)} 
//           required 
//         />
//       </div>
  
//       <div className="form-button">
//         <button type="submit" disabled={loading}>
//           {loading ? "Processing..." : "Pay"}
//         </button>
//       </div>
//     </form>
//   </div>
  
//   );
// };

// export default Donate;
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Donate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [campaign, setCampaign] = useState(null);
  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const selectedCampaign = location.state?.campaign || JSON.parse(localStorage.getItem("selectedCampaign"));
    if (selectedCampaign) {
      setCampaign(selectedCampaign);
    } else {
      alert("Error fetching campaign details.");
      navigate("/UserHome");
    }
  }, [navigate, location]);

  const validateInputs = () => {
    const newErrors = {};

    if (amount <= 0) newErrors.amount = "Amount must be greater than 0.";
    if (!/^\d{16}$/.test(cardNumber)) newErrors.cardNumber = "Card Number must be exactly 16 digits.";
    if (!/^(0[1-9]|1[0-2])$/.test(expiryMonth)) newErrors.expiryMonth = "Expiry Month must be between 01 and 12.";
    if (!/^\d{4}$/.test(expiryYear) || expiryYear < currentYear) newErrors.expiryYear = `Expiry Year must be at least ${currentYear}.`;
    if (!/^\d{3}$/.test(cvv)) newErrors.cvv = "CVV must be exactly 3 digits.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if all fields are filled
    if (!amount || !cardNumber || !expiryMonth || !expiryYear || !cvv) {
      alert("All fields are required.");
      return;
    }
  
    // Validate inputs
    if (!validateInputs()) return;
  
    setLoading(true);
    try {
      const payload = {
        campaignId: campaign._id,
        amount,
        cardNumber,
        expiryMonth,
        expiryYear,
        cvv,
      };
  
      console.log("Request Payload:", payload); // Debugging
  
      const response = await fetch("http://localhost:3000/api/donations/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
      console.log("Backend Response:", data); // Debugging
  
      if (response.ok) {
        alert(`✅ Payment of $${amount} successful for ${campaign.title}`);
        localStorage.removeItem("selectedCampaign");
        navigate("/UserHome", { state: { paidCampaign: campaign } });
      } else {
        alert(`❌ Donation failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!campaign) return <h2>Campaign details not found!</h2>;

  return (
    <div className="donate-container1">
      <h2>Donate to {campaign.title}</h2>

      <div className="campaign-card">
        <img src={campaign.image} alt={campaign.title} />
        <h3>{campaign.title}</h3>
        <p>{campaign.description}</p>
        <p><strong>Goal:</strong> ${campaign.goal}</p>
      </div>

      <form className="donate-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            required
            disabled={loading}
          />
          {errors.amount && <span className="error">{errors.amount}</span>}
        </div>

        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="16"
            pattern="\d{16}"
            required
            disabled={loading}
          />
          {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Expiry Month</label>
            <input
              type="text"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              maxLength="2"
              pattern="0[1-9]|1[0-2]"
              required
              disabled={loading}
            />
            {errors.expiryMonth && <span className="error">{errors.expiryMonth}</span>}
          </div>

          <div className="form-group">
            <label>Expiry Year</label>
            <input
              type="text"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              maxLength="4"
              pattern="\d{4}"
              required
              disabled={loading}
            />
            {errors.expiryYear && <span className="error">{errors.expiryYear}</span>}
          </div>
        </div>

        <div className="form-group">
          <label>CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength="3"
            pattern="\d{3}"
            required
            disabled={loading}
          />
          {errors.cvv && <span className="error">{errors.cvv}</span>}
        </div>

        <div className="form-button">
          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Pay"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Donate;