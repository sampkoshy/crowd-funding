// import React, { useEffect, useState } from "react";
// import {Link, useNavigate } from "react-router-dom";
// import Cards from "../components/Cards";
// import './adminhome.css'
// import AdminCreateCampaign from "./AdminCreateCampain";

// const AdminHome = () => {
//   const navigate = useNavigate();
//   const [showCreateForm, setShowCreateForm] = useState(false);
//   const [campaigns, setCampaigns] = useState([]); // ✅ Store campaigns from backend

//   useEffect(() => {
//     const userRole = localStorage.getItem("userRole");

//     // ✅ Redirect non-admin users
//     if (userRole !== "admin") {
//       navigate("/login");
//     }

//     // ✅ Fetch campaigns from backend
//     fetchCampaigns();
//   }, [navigate]);

//   const fetchCampaigns = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/campaigns/all");

//       if (!response.ok) {
//         throw new Error(`HTTP Error! Status: ${response.status}`); // ✅ More specific error
//       }

//       const data = await response.json(); // ✅ Parse JSON safely
//       setCampaigns(data);
//     } catch (error) {
//       console.error("❌ Error fetching campaigns:", error);
//     }
//   };

//   // ✅ Function to add a campaign and update the list
//   const addCampaign = async (newCampaign) => {
//     try {
//       const response = await fetch("http://localhost:3000/api/campaigns/create", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newCampaign),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP Error! Status: ${response.status}`);
//       }

//       const savedCampaign = await response.json();
//       setCampaigns([...campaigns, savedCampaign]); // ✅ Update state
//       setShowCreateForm(false);
//     } catch (error) {
//       console.error("❌ Error creating campaign:", error);
//     }
//   };

//   return (
//     <div className="admin-home-container">
//     {/* ✅ Login Redirect Link */}
//     <div className="adm">
//       <Link to="/Login"><span>Login</span></Link>
//     </div>

//     {/* ✅ Admin Header */}
//     <div className="ad-head">
//       <h2>Welcome, Admin!</h2>
//     </div>
//     <p>Manage and create fundraising campaigns.</p>

//     {/* ✅ Toggle Campaign Creation Form */}
//     <button onClick={() => setShowCreateForm(!showCreateForm)}>
//       {showCreateForm ? "Close Form" : "Create a Campaign"}
//     </button>

//     {/* ✅ Show the Campaign Form */}
//     {showCreateForm && <AdminCreateCampaign addCampaign={addCampaign} />}

//     {/* ✅ Ongoing Campaigns Section */}
//     <h2 className="ad-camp">Ongoing Campaigns</h2>

//     {/* ✅ Display Campaigns in Cards Component */}
//     <Cards campaigns={campaigns} />
//   </div>
//   );
// };

// export default AdminHome;



 //time (5.40) admin ill 
 import React, { useEffect, useState } from "react";
 import { Link, useNavigate } from "react-router-dom";
 import Cards from "../components/Cards";
 import "./adminhome.css";
 import AdminCreateCampaign from "./AdminCreateCampain";
 
 const AdminHome = () => {
   const navigate = useNavigate();
   const [showCreateForm, setShowCreateForm] = useState(false);
   const [campaigns, setCampaigns] = useState([]); // ✅ Store campaigns from backend
 
   useEffect(() => {
     const userRole = localStorage.getItem("userRole");
 
     // ✅ Redirect non-admin users
     if (userRole !== "admin") {
       navigate("/login");
     }
 
     // ✅ Fetch campaigns from backend
     fetchCampaigns();
   }, [navigate]);
 
   const fetchCampaigns = async () => {
     try {
       const response = await fetch("http://localhost:3000/api/campaigns/all");
 
       if (!response.ok) {
         throw new Error(`HTTP Error! Status: ${response.status}`);
       }
 
       const data = await response.json();
       console.log("✅ Fetched Campaigns:", data); // ✅ Debugging output
       setCampaigns(data);
     } catch (error) {
       console.error("❌ Error fetching campaigns:", error);
     }
   };
 
   // ✅ Function to add a campaign and update the list
   const addCampaign = async (newCampaign) => {
     try {
       const response = await fetch("http://localhost:3000/api/campaigns/create", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newCampaign),
       });
 
       if (!response.ok) {
         throw new Error(`HTTP Error! Status: ${response.status}`);
       }
 
       const savedCampaign = await response.json();
       console.log("✅ Campaign Created:", savedCampaign);
 
       // ✅ Update state with new campaign
       setCampaigns([...campaigns, savedCampaign.newCampaign]); 
       setShowCreateForm(false);
     } catch (error) {
       console.error("❌ Error creating campaign:", error);
     }
   };
 
   return (
     <div className="admin-home-container">
       {/* ✅ Login Redirect Link */}
       <div className="adm">
         <Link to="/Login">
           <span>Login</span>
         </Link>
       </div>
 
       {/* ✅ Admin Header */}
       <div className="ad-head">
         <h2>Welcome, Admin!</h2>
       </div>
       <p>Manage and create fundraising campaigns.</p>
 
       {/* ✅ Toggle Campaign Creation Form */}
       <button onClick={() => setShowCreateForm(!showCreateForm)}>
         {showCreateForm ? "Close Form" : "Create a Campaign"}
       </button>
 
       {/* ✅ Show the Campaign Form */}
       {showCreateForm && <AdminCreateCampaign addCampaign={addCampaign} />}
 
       {/* ✅ Ongoing Campaigns Section */}
       <h2 className="ad-camp">Ongoing Campaigns</h2>
 
       {/* ✅ Display Campaigns in Cards Component */}
       {campaigns.length > 0 ? (
         <Cards campaigns={campaigns} />
       ) : (
         <p>No campaigns found.</p>
       )}
     </div>
   );
 };
 
 export default AdminHome;
 