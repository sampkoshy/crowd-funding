


import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./donate.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    let selectedCampaign = location.state?.campaign;
    
    if (!selectedCampaign) {
      selectedCampaign = JSON.parse(localStorage.getItem("selectedCampaign"));
    }

    console.log("🎯 Selected Campaign:", selectedCampaign);

    if (selectedCampaign) {
      setCampaign(selectedCampaign);
    } else {
      toast.error("Error fetching campaign details.", { theme: "colored" });
      setTimeout(() => navigate("/UserHome"), 2000);
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
  
    if (!amount || !cardNumber || !expiryMonth || !expiryYear || !cvv) {
      toast.warn("⚠️ All fields are required.", { theme: "colored" });
      return;
    }
  
    if (!validateInputs()) return;
  
    setLoading(true);
    try {
      const payload = {
        userId: localStorage.getItem("userId"),
        campaignId: campaign._id,
        amount,
        cardNumber,
        expiryMonth,
        expiryYear,
        cvv,
      };
  
      console.log("📌 Sending Payload:", payload);
  
      const response = await fetch("http://localhost:4000/api/donations/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
      console.log("📬 Backend Response:", data);
  
      if (response.ok) {
        toast.success(`✅ Payment of $${amount} successful for ${campaign.title}`, { theme: "colored" });
        setTimeout(() => {
          localStorage.removeItem("selectedCampaign");
          navigate("/Home", { state: { paidCampaign: campaign } });
        }, 2000);
      } else {
        toast.error(`❌ Donation failed: ${data.message}`, { theme: "colored" });
      }
    } catch (error) {
      console.error("🚨 Error:", error);
      toast.error("🚨 An error occurred. Please try again.", { theme: "colored" });
    } finally {
      setLoading(false);
    }
  };

  if (!campaign) return <h2>Campaign details not found!</h2>;

  return (
    
    <div className="donate-container1">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="campaign-card">
       <img src={campaign.image} alt={campaign.title} className="camp-img" />
         <h3>{campaign.title}</h3>
        <div className="camp-des">
          <span>Description</span>
         <p>{campaign.description}</p>
         </div>
    <div className="camp-fund">
          <p><strong>Goal:</strong> ${campaign.goal}</p>
        <p><strong>Raised:</strong> ${campaign.raised}</p>
       </div>
     </div>

      <form className="donate-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label>Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} min="1" required disabled={loading} />
          {errors.amount && <span className="error">{errors.amount}</span>}
        </div>

        <div className="form-group">
          <label>Card Number</label>
          <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} maxLength="16" required disabled={loading} />
          {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Expiry Month</label>
            <input type="text" value={expiryMonth} onChange={(e) => setExpiryMonth(e.target.value)} maxLength="2" required disabled={loading} />
            {errors.expiryMonth && <span className="error">{errors.expiryMonth}</span>}
          </div>

          <div className="form-group">
            <label>Expiry Year</label>
            <input type="text" value={expiryYear} onChange={(e) => setExpiryYear(e.target.value)} maxLength="4" required disabled={loading} />
            {errors.expiryYear && <span className="error">{errors.expiryYear}</span>}
          </div>
        </div>

        <div className="form-group">
          <label>CVV</label>
          <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} maxLength="3" required disabled={loading} />
          {errors.cvv && <span className="error">{errors.cvv}</span>}
        </div>

        <div className="form-button">
          <button type="submit" disabled={loading}>{loading ? "Processing..." : "Pay"}</button>
        </div>
      </form>
    </div>
  //   <div className="donate-container1">
  //     <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
  //     <div className="campaign-card">
  //      <img src={campaign.image} alt={campaign.title} className="camp-img" />
  //        <h3>{campaign.title}</h3>
  //       <div className="camp-des">
  //         <span>Description</span>
  //        <p>{campaign.description}</p>
  //        </div>
  //   <div className="camp-fund">
  //         <p><strong>Goal:</strong> ${campaign.goal}</p>
  //       <p><strong>Raised:</strong> ${campaign.raised}</p>
  //      </div>
  //    </div>

  //     <form className="donate-form" onSubmit={handleSubmit} autoComplete="off">
  //       <div className="form-group">
  //         <label>Amount</label>
  //         <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} min="1" required disabled={loading} />
  //         {errors.amount && <span className="error">{errors.amount}</span>}
  //       </div>

  //       <div className="form-group">
  //         <label>Card Number</label>
  //         <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} maxLength="16" required disabled={loading} />
  //         {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
  //       </div>

  //       <div className="form-row">
  //         <div className="form-group">
  //           <label>Expiry Month</label>
  //           <input type="text" value={expiryMonth} onChange={(e) => setExpiryMonth(e.target.value)} maxLength="2" required disabled={loading} />
  //           {errors.expiryMonth && <span className="error">{errors.expiryMonth}</span>}
  //         </div>

  //         <div className="form-group">
  //           <label>Expiry Year</label>
  //           <input type="text" value={expiryYear} onChange={(e) => setExpiryYear(e.target.value)} maxLength="4" required disabled={loading} />
  //           {errors.expiryYear && <span className="error">{errors.expiryYear}</span>}
  //         </div>
  //       </div>

  //       <div className="form-group">
  //         <label>CVV</label>
  //         <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} maxLength="3" required disabled={loading} />
  //         {errors.cvv && <span className="error">{errors.cvv}</span>}
  //       </div>

  //       <div className="form-button">
  //         <button type="submit" disabled={loading}>{loading ? "Processing..." : "Pay"}</button>
  //       </div>
  //     </form>
  //   </div>
  );
};

export default Donate;
