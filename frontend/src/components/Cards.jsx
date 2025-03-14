import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate } from "react-router-dom";
import "./cards.css";

const Cards = ({ campaigns }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  // ✅ Fetch user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    // ✅ Retrieve selected campaign from localStorage
    const storedSelectedCampaign = localStorage.getItem("selectedCampaign");
    if (storedSelectedCampaign) {
      setSelectedCampaign(JSON.parse(storedSelectedCampaign));
    }
  }, []);

  // // ✅ Handle Donate Button Click
  // const handleDonate = (campaign) => {
  //   if (!user) {
  //     alert("Please log in to donate.");
  //     navigate("/Login");
  //     return;
  //   }

  //   // ✅ Save selected campaign in localStorage
  //   localStorage.setItem("selectedCampaign", JSON.stringify(campaign));

  //   // ✅ Update state for immediate UI change
  //   setSelectedCampaign(campaign);

  //   console.log("✅ Selected Campaign Stored:", campaign);

  //   // ✅ Redirect to UserHome
  //   navigate("/UserHome");
  // };

  //time (6.00)
  const handleDonate = async (campaign) => {
    if (!user) {
      alert("Please log in to donate.");
      navigate("/Login");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/api/users/select-campaign`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}` // ✅ Send user token if using authentication
        },
        body: JSON.stringify({ userId: user._id, campaignId: campaign._id }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to save selected campaign");
      }
  
      localStorage.setItem("selectedCampaign", JSON.stringify(campaign)); // ✅ Store locally for immediate use
  
      console.log("✅ Selected Campaign Stored in DB & LocalStorage:", campaign);
      navigate("/UserHome"); // ✅ Navigate to UserHome after selection
    } catch (error) {
      console.error("❌ Error storing selected campaign:", error);
    }
  };
  

  return (
    <div className="cards-container">
      {campaigns?.map((campaign) => {
        const isSelected = selectedCampaign?._id === campaign._id;

        return (
          <div className="card-container" key={campaign._id}>
            <div className="card-image">
              <img src={campaign.image || "https://via.placeholder.com/300"} alt={campaign.title} />
              <span className="category-badge">{campaign.category}</span>
            </div>

            <div className="card-content">
              <div className="card-info">
                <span>
                  <i className="fa-regular fa-clock"></i> <strong>Created:</strong> {campaign.created}
                </span>
                <span>
                  <i className="fa-solid fa-location-dot"></i> <strong>Location:</strong> {campaign.location}
                </span>
              </div>

              <h3 className="card-title">{campaign.title}</h3>
              <p className="card-description">{campaign.description}</p>

              <div className="card-progress">
                <div className="progress-label">{campaign.progress}%</div>
                <ProgressBar now={campaign.progress} />
              </div>

              <div className="card-funding">
                <h4><strong>Raised:</strong> ${campaign.raised.toLocaleString()}</h4>
                <h4><strong>Goal:</strong> ${campaign.goal.toLocaleString()}</h4>
              </div>

              {/* ✅ Donate / Pay Button Logic */}
              <div className="card-button">
                <button className="donate-button" onClick={() => handleDonate(campaign)}>
                  <span>{isSelected ? "Pay" : "Donate"}</span>
                  <i className="fa-regular fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
// import React from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";
// import { useNavigate } from "react-router-dom";
// import { useCampaign } from "../context/CampaignContext"; // ✅ Import Context
// import axios from "axios"; // ✅ Import Axios for API Requests
// import "./cards.css";

// const Cards = ({ campaigns }) => {
//   const navigate = useNavigate();
//   const { selectedCampaign, setSelectedCampaign } = useCampaign(); // ✅ Use Context
//   const userId = localStorage.getItem("userId"); // ✅ Get Logged-In User ID

//   const handleDonate = async (campaign) => {
//     console.log("🔹 Donate Button Clicked for:", campaign);

//     if (!userId) {
//       alert("Please log in to donate.");
//       navigate("/Login");
//       return;
//     }

//     try {
//       // ✅ Save Selected Campaign in Database
//       await axios.post("http://localhost:3000/api/campaigns/select-campaign", { userId, campaignId: campaign._id });

//       // ✅ Update Context
//       setSelectedCampaign(campaign);
//       console.log("✅ setSelectedCampaign Updated:", campaign);

//       // ✅ Navigate to UserHome
//       navigate("/UserHome");
//     } catch (error) {
//       console.error("❌ Error selecting campaign:", error);
//       alert("Error selecting campaign. Please try again.");
//     }
//   };

//   return (
//     <div className="cards-container">
//       {campaigns?.map((campaign) => (
//         <div className="card-container" key={campaign._id}>
//           <div className="card-image">
//             <img src={campaign.image || "https://via.placeholder.com/300"} alt={campaign.title} />
//             <span className="category-badge">{campaign.category}</span>
//           </div>

//           <div className="card-content">
//             <div className="card-info">
//               <span>
//                 <i className="fa-regular fa-clock"></i> <strong>Created:</strong> {campaign.created}
//               </span>
//               <span>
//                 <i className="fa-solid fa-location-dot"></i> <strong>Location:</strong> {campaign.location}
//               </span>
//             </div>

//             <h3 className="card-title">{campaign.title}</h3>
//             <p className="card-description">{campaign.description}</p>

//             <div className="card-progress">
//               <div className="progress-label">{campaign.progress}%</div>
//               <ProgressBar now={campaign.progress} />
//             </div>

//             <div className="card-funding">
//               <h4><strong>Raised:</strong> ${campaign.raised.toLocaleString()}</h4>
//               <h4><strong>Goal:</strong> ${campaign.goal.toLocaleString()}</h4>
//             </div>

//             {/* ✅ Donate / Pay Button Logic */}
//             <div className="card-button">
//               <button className="donate-button" onClick={() => handleDonate(campaign)}>
//                 <span>{selectedCampaign?._id === campaign._id ? "Pay" : "Donate"}</span>
//                 <i className="fa-regular fa-heart"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;
