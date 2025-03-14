// import React, { useEffect, useState } from "react";
// import Cards from "../components/Cards"; // Import Cards component
// import "./userhome.css";

// const UserHome = () => {
//   const [donatedCampaigns, setDonatedCampaigns] = useState([]);

//   useEffect(() => {
//     // Retrieve donated campaigns from local storage
//     const storedCampaigns = JSON.parse(localStorage.getItem("donatedCampaigns")) || [];
//     setDonatedCampaigns(storedCampaigns);
//   }, []);

//   return (
//     <div className="userhome-container">
//       <h2>Welcome to User Home</h2>

//       {donatedCampaigns.length > 0 ? (
//         <Cards campaigns={donatedCampaigns} buttonText="Pay Now" />
//       ) : (
//         <p>No campaigns donated to yet.</p>
//       )}
//     </div>
//   );
// };

// // // export default UserHome;
// import React, { useEffect, useState } from "react";
// import Cards from "../components/Cards";

// const UserHome = () => {
//   const [user, setUser] = useState(null);
//   const [donatedCampaigns, setDonatedCampaigns] = useState([]);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);

//   useEffect(() => {
//     // ✅ Retrieve user details
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }

//     // ✅ Retrieve donated campaigns
//     const storedDonations = JSON.parse(localStorage.getItem("donatedCampaigns")) || [];
//     setDonatedCampaigns(storedDonations);

//     // ✅ Retrieve selected campaign
//     const storedSelectedCampaign = localStorage.getItem("selectedCampaign");
//     if (storedSelectedCampaign) {
//       try {
//         const campaignData = JSON.parse(storedSelectedCampaign);
        
//         console.log("✅ Selected Campaign Retrieved:", campaignData);
        
//         if (campaignData && campaignData._id) {
//           setSelectedCampaign(campaignData);
//         }
//       } catch (error) {
//         console.error("❌ Error parsing selectedCampaign:", error);
//       }
//     }
//   }, []);

//   return (
//     <div>
//       <h2>Welcome to User Home</h2>

//       {/* ✅ Debugging to Check if selectedCampaign Exists */}
//       {console.log("Rendering Selected Campaign:", selectedCampaign)}

//       {/* ✅ Show the campaign user clicked */}
//       {selectedCampaign ? (
//         <div>
//           <h3>Your Selected Campaign</h3>
//           <Cards campaigns={[selectedCampaign]} />
//         </div>
//       ) : (
//         <p>No selected campaign.</p>
//       )}

//       {/* ✅ Show paid campaigns */}
//       {donatedCampaigns.length > 0 ? (
//         <div>
//           <h3>Your Paid Campaigns</h3>
//           <Cards campaigns={donatedCampaigns} />
//         </div>
//       ) : (
//         <p>No paid campaigns yet.</p>
//       )}
//     </div>
//   );
// };

// export default UserHome;



// import React, { useEffect, useState } from "react";
// import Cards from "../components/Cards";
// import { useNavigate } from "react-router-dom";

// const UserHome = () => {
//   const navigate = useNavigate();
//   const [selectedCampaign, setSelectedCampaign] = useState(null);

//   // ✅ Retrieve selected campaign from localStorage
//   // useEffect(() => {
//   //   const storedSelectedCampaign = localStorage.getItem("selectedCampaign");
//   //   if (storedSelectedCampaign) {
//   //     setSelectedCampaign(JSON.parse(storedSelectedCampaign));
//   //   }
//   // }, []);

//   // // ✅ Handle "Pay" button click (Navigate to Donate Page)
//   const handlePay = () => {
//     if (!selectedCampaign) return;

//     navigate("/Donate", { state: { campaign: selectedCampaign } });
//   };

//   useEffect(() => {
//     const fetchSelectedCampaign = async () => {
//       try {
//         const userId = JSON.parse(localStorage.getItem("user"))?._id;
//         if (!userId) return;
  
//         const response = await fetch(`http://localhost:3000/api/campaigns/selected/${userId}`);
//         const data = await response.json();
  
//         if (data.selectedCampaign) {
//           setSelectedCampaign(data.selectedCampaign);
//           console.log("✅ API Selected Campaign:", data.selectedCampaign);
//         }
//       } catch (error) {
//         console.error("❌ Error fetching selected campaign:", error);
//       }
//     };
  
//     fetchSelectedCampaign();
//   }, []);
  

//   return (
//     <div>
//       <h2>Welcome to User Home</h2>

//       {/* ✅ Debugging */}
//       {console.log("Rendering Selected Campaign:", selectedCampaign)}

//       {selectedCampaign && (
//         <div>
//           <h3>Your Selected Campaign</h3>
//           <Cards campaigns={[selectedCampaign]} />
//           {/* ✅ Pay Button */}
//           <button className="pay-button" onClick={handlePay}>
//             Pay
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// // export default UserHome;import React, { useEffect, useState } from "react";



 // working akunund card ill data varunund time (5.38)



// import Cards from "../components/Cards";// Import the Cards component
// import axios from "axios";

// const UserHome = () => {
//   const [campaigns, setCampaigns] = useState([]);

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/campaigns/all");
//         setCampaigns(response.data); // ✅ Set campaigns data
//       } catch (error) {
//         console.error("Error fetching campaigns:", error);
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   return (
//     <div>
//       <h2>All Campaigns</h2>
//       <Cards campaigns={campaigns} /> {/* ✅ Pass campaigns prop */}
//     </div>
//   );
// };

// export default UserHome;
   

// change akuva nokan vendi(6.00)

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cards from "../components/Cards";

// const UserHome = () => {
//   const [user, setUser] = useState(null);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setUser(storedUser);
//       fetchSelectedCampaign(storedUser._id); // ✅ Fetch campaign from database
//     }
//   }, []);

//   const fetchSelectedCampaign = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/users/${userId}/selected-campaign`);
//       setSelectedCampaign(response.data);
//     } catch (error) {
//       console.error("❌ Error fetching selected campaign:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Your Selected Campaign</h1>
//       {selectedCampaign ? (
//         <Cards campaigns={[selectedCampaign]} /> // ✅ Render only the selected campaign
//       ) : (
//         <p>No campaign selected.</p>
//       )}
//     </div>
//   );
// };

// export default UserHome;
// // epoya api work ayathu change akuvaaa 
// ithu work ayii data eduthu kanichu 6.50
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const UserHome = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       navigate("/Login"); // ✅ Redirect if not logged in
//       return;
//     }
//     setUser({ _id: userId });

//     // ✅ Fetch the selected campaign from backend
//     fetchSelectedCampaign(userId);
//   }, [navigate]);

//   const fetchSelectedCampaign = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/users/${userId}/selected-campaign`);
//       if (response.status === 200) {
//         console.log("✅ Selected Campaign Fetched:", response.data);
//         setSelectedCampaign(response.data);
//       }
//     } catch (error) {
//       console.error("❌ Error fetching selected campaign:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Welcome, {user?._id}</h1>
//       {selectedCampaign ? (
//         <div className="campaign-card">
//           <h2>{selectedCampaign.title}</h2>
//           <img src={selectedCampaign.image} alt={selectedCampaign.title} width="300px" />
//           <p>{selectedCampaign.description}</p>
//           <button onClick={() => navigate("/donate")}>Donate Now</button>
//         </div>
//       ) : (
//         <p>No campaign selected.</p>
//       )}
//     </div>
//   );
// };

// export default UserHome;

 
//changeing beascuse of name instead of id (11.20)

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const UserHome = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       navigate("/Login"); // ✅ Redirect if not logged in
//       return;
//     }
//     setUser({ _id: userId });

//     // ✅ Fetch the selected campaign from backend
//     fetchSelectedCampaign(userId);
//   }, [navigate]);

//   const fetchSelectedCampaign = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/users/${userId}/selected-campaign`);
//       if (response.status === 200) {
//         console.log("✅ Selected Campaign Fetched:", response.data);
//         setSelectedCampaign(response.data);
//       }
//     } catch (error) {
//       console.error("❌ Error fetching selected campaign:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Welcome, {user?._id}</h1>
//       <h2>Your Selected Campaign</h2>

//       {selectedCampaign ? (
//         <div className="campaign-card">
//           <h3>{selectedCampaign.title}</h3>
//           <img src={selectedCampaign.image} alt={selectedCampaign.title} width="300px" />
//           <p><strong>Description:</strong> {selectedCampaign.description}</p>
//           <p><strong>Goal:</strong> ${selectedCampaign.goal}</p>
//           <p><strong>Location:</strong> {selectedCampaign.location}</p>
//           <button onClick={() => navigate("/donate", { state: { campaign: selectedCampaign } })}>
//             Donate Now
//           </button>
//         </div>
//       ) : (
//         <p>⚠️ No campaign selected. Please select one.</p>
//       )}
//     </div>
//   );
// };

// export default UserHome;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserHome = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  useEffect(() => {
    // ✅ Get user details from localStorage
    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("userName");

    console.log("📌 Retrieved userId:", userId);
    console.log("📌 Retrieved userName:", userName);

    if (!userId || !userName) {
      console.log("🚨 No user found, redirecting to Login...");
      navigate("/Login"); // ✅ Redirect if not logged in
      return;
    }

    setUser({ _id: userId, name: userName });

    // ✅ Fetch the selected campaign using userId
    fetchSelectedCampaign(userId);
  }, [navigate]);

  const fetchSelectedCampaign = async (userId) => {
    try {
      console.log(`📢 Fetching campaign for userId: ${userId}`);
      const response = await axios.get(`http://localhost:3000/api/users/${userId}/selected-campaign`);

      if (response.status === 200) {
        console.log("✅ Selected Campaign Fetched:", response.data);
        setSelectedCampaign(response.data);
      }
    } catch (error) {
      console.error("❌ Error fetching selected campaign:", error);
    }
  };

  return (
    <div>
      <h1>Welcome, {user?.name || "Guest"}</h1> {/* ✅ Show user name or fallback */}
      <h2>Your Selected Campaign</h2>

      {selectedCampaign ? (
        <div className="campaign-card">
          <h3>{selectedCampaign.title}</h3>
          <img src={selectedCampaign.image} alt={selectedCampaign.title} width="300px" />
          <p><strong>Description:</strong> {selectedCampaign.description}</p>
          <p><strong>Goal:</strong> ${selectedCampaign.goal}</p>
          <p><strong>Location:</strong> {selectedCampaign.location}</p>
          <button onClick={() => navigate("/donate", { state: { campaign: selectedCampaign } })}>
            Donate Now
          </button>
        </div>
      ) : (
        <p>⚠️ No campaign selected. Please select one.</p>
      )}
    </div>
  );
};

export default UserHome;
