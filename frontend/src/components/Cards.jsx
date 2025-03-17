// import React, { useEffect, useState } from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";
// import { useNavigate } from "react-router-dom";

// import "./cards.css";

// const Cards = ({ campaigns }) => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);

//   // ✅ Fetch user from localStorage
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));

//     // ✅ Retrieve selected campaign from localStorage
//     const storedSelectedCampaign = localStorage.getItem("selectedCampaign");
//     if (storedSelectedCampaign) {
//       setSelectedCampaign(JSON.parse(storedSelectedCampaign));
//     }
//   }, []);

//   //time (6.00)
//   const handleDonate = async (campaign) => {
//     if (!user) {
//       alert("Please log in to donate.");
//       navigate(`/Login?id=${campaign._id}`);
//       return;
//     }
  
//     try {
//       const response = await fetch(`http://localhost:4000/api/users/select-campaign`, {
//         method: "POST",
//         headers: { 
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${user.token}` // ✅ Send user token if using authentication
//         },
//         body: JSON.stringify({ userId: user._id, campaignId: campaign._id }),
//       });
  
//       if (!response.ok) {
//         throw new Error("Failed to save selected campaign");
//       }
  
//       localStorage.setItem("selectedCampaign", JSON.stringify(campaign)); // ✅ Store locally for immediate use
  
//       console.log("✅ Selected Campaign Stored in DB & LocalStorage:", campaign);
//       navigate("/UserHome"); // ✅ Navigate to UserHome after selection
//     } catch (error) {
//       console.error("❌ Error storing selected campaign:", error);
//     }
//   };
  

//   return (
//     <div className="cards-container">
//       {campaigns?.map((campaign) => {
//         const isSelected = selectedCampaign?._id === campaign._id;

//         return (
//           <div className="card-container" key={campaign._id}>
//             <div className="card-image">
//               <img src={campaign.image || "https://via.placeholder.com/300"} alt={campaign.title} />
//               <span className="category-badge">{campaign.category}</span>
//             </div>

//             <div className="card-content">
//               <div className="card-info">
//                 <span>
//                   <i className="fa-regular fa-clock"></i> <strong>Created:</strong> {campaign.created}
//                 </span>
//                 <span>
//                   <i className="fa-solid fa-location-dot"></i> <strong>Location:</strong> {campaign.location}
//                 </span>
//               </div>

//               <h3 className="card-title">{campaign.title}</h3>
//               <p className="card-description">{campaign.description}</p>

//               <div className="card-progress">
//                 <div className="progress-label">{campaign.progress}%</div>
//                 <ProgressBar now={campaign.progress} />
//               </div>

//               <div className="card-funding">
//                 <h4><strong>Raised:</strong> ${campaign.raised.toLocaleString()}</h4>
//                 <h4><strong>Goal:</strong> ${campaign.goal.toLocaleString()}</h4>
//               </div>

//               {/* ✅ Donate / Pay Button Logic */}
//               <div className="card-button">
//                 <button className="donate-button" onClick={() => handleDonate(campaign)}>
//                   <span>{isSelected && "Donate"}</span>
                  
//                   <i className="fa-regular fa-heart"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Cards;   


// import React, { useEffect, useState } from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";
// import { useNavigate } from "react-router-dom";
// import "./cards.css";

// const Cards = ({ campaigns }) => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//   }, []);

//   const handleDonate = async (campaign) => {
//     if (!user) {
//       alert("Please log in to donate.");
//       navigate(`/Login?id=${campaign._id}`);
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:4000/api/users/select-campaign`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${user.token}`,
//         },
//         body: JSON.stringify({ userId: user._id, campaignId: campaign._id }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to save selected campaign");
//       }

//       localStorage.setItem("selectedCampaign", JSON.stringify(campaign));
//       console.log("✅ Selected Campaign Stored:", campaign);
//       navigate("/UserHome");
//     } catch (error) {
//       console.error("❌ Error storing selected campaign:", error);
//     }
//   };

//   return (
//     <div className="cards-container">
//       {campaigns?.map((campaign) => {
//         const progress = campaign.goal > 0 ? (campaign.raised / campaign.goal) * 100 : 0;

//         return (
//           <div className="card-container" key={campaign._id}>
//             <div className="card-image">
//               <img src={campaign.image || "https://via.placeholder.com/300"} alt={campaign.title} />
//               <span className="category-badge">{campaign.category}</span>
//             </div>

//             <div className="card-content">
//               <div className="card-info">
//               <span>
//   <i className="fa-regular fa-clock"></i> <strong>Created:</strong>{" "}
//   {new Date(campaign.created).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   })}
// </span>

//                 <span>
//                   <i className="fa-solid fa-location-dot"></i> <strong>Location:</strong> {campaign.location}
//                 </span>
//               </div>

//               <h3 className="card-title">{campaign.title}</h3>
//               <p className="card-description">{campaign.description}</p>

//               {/* ✅ Fixed Progress Bar */}
//               {/* <div className="card-progress">
//                 <div className="progress-label">{Math.min(progress, 100).toFixed(2)}%</div>
//                 <ProgressBar now={Math.min(progress, 100)} animated variant="success" />
//               </div> */}
//               <div className="card-progress">
//   {/* Ensure progress is within 0-100 range */}
//   <div className="progress-label">
//     {Math.min(100, ((campaign.raised / campaign.goal) * 100).toFixed(2))}%
//   </div>

//   <ProgressBar 
//     now={Math.min(100, (campaign.raised / campaign.goal) * 100)} 
//     className="progress-bar"
//   />
// </div>


//               <div className="card-funding">
//                 <h4>
//                   <strong>Raised:</strong> ${campaign.raised.toLocaleString()}
//                 </h4>
//                 <h4>
//                   <strong>Goal:</strong> ${campaign.goal.toLocaleString()}
//                 </h4>
//               </div>

//               <div className="card-button">
//                 <button className="donate-button" onClick={() => handleDonate(campaign)}>
//                   <span>Donate</span>
//                   <i className="fa-regular fa-heart"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Cards;

import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate } from "react-router-dom";
import "./cards.css";

const Cards = ({ campaigns }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleDonate = async (campaign) => {
    // 🔴 Check if campaign goal is already reached
    if (campaign.raised >= campaign.goal) {
      alert("This campaign has ended because the goal amount has been reached.");
      return;
    }

    // 🟢 Check if user is logged in
    if (!user) {
      alert("Please log in to donate.");
      navigate(`/Login?id=${campaign._id}`);
      return;
    }

    try {
      const response = await fetch(`http://localhost:4000/api/users/select-campaign`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ userId: user._id, campaignId: campaign._id }),
      });

      if (!response.ok) {
        throw new Error("Failed to save selected campaign");
      }

      localStorage.setItem("selectedCampaign", JSON.stringify(campaign));
      console.log("✅ Selected Campaign Stored:", campaign);
      navigate("/UserHome");
    } catch (error) {
      console.error("❌ Error storing selected campaign:", error);
    }
  };

  const handleEdit = (campaignId) => {
    navigate(`/edit-campaign/${campaignId}`);
  };

  return (
    <div className="cards-container">
      {campaigns?.map((campaign) => {
        const progress = campaign.goal > 0 ? (campaign.raised / campaign.goal) * 100 : 0;
        const isOwner = user && user._id === campaign.ownerId; // ✅ Check if user is the owner

        return (
          <div className="card-container" key={campaign._id}>
            <div className="card-image">
              <img src={campaign.image || "https://via.placeholder.com/300"} alt={campaign.title} />
              <span className="category-badge">{campaign.category}</span>
            </div>

            <div className="card-content">
              <div className="card-info">
                <span>
                  <i className="fa-regular fa-clock"></i> <strong>Created:</strong>{" "}
                  {new Date(campaign.created).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>

                <span>
                  <i className="fa-solid fa-location-dot"></i> <strong>Location:</strong> {campaign.location}
                </span>
              </div>

              <h3 className="card-title">{campaign.title}</h3>
              <p className="card-description">{campaign.description}</p>

              <div className="card-progress">
                <div className="progress-label">
                  {Math.min(100, ((campaign.raised / campaign.goal) * 100).toFixed(2))}%
                </div>
                <ProgressBar 
                  now={Math.min(100, (campaign.raised / campaign.goal) * 100)} 
                  className="progress-bar"
                />
              </div>

              <div className="card-funding">
                <h4>
                  <strong>Raised:</strong> ${campaign.raised.toLocaleString()}
                </h4>
                <h4>
                  <strong>Goal:</strong> ${campaign.goal.toLocaleString()}
                </h4>
              </div>

              <div className="card-button">
                <button className="donate-button" onClick={() => handleDonate(campaign)}>
                  <span>Donate</span>
                  <i className="fa-regular fa-heart"></i>
                </button>

                {/* 🔵 Edit Button: Only show if user is the campaign owner */}
                {isOwner && (
                  <button className="edit-button" onClick={() => handleEdit(campaign._id)}>
                    <span>Edit</span>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;





