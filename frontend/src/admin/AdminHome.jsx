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
//       const response = await fetch("http://localhost:4000/api/campaigns/all");

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
//       const response = await fetch("http://localhost:4000/api/campaigns/create", {
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



//  //time (5.40) admin ill 
//  import React, { useEffect, useState } from "react";
//  import { Link, useNavigate } from "react-router-dom";
//  import Cards from "../components/Cards";
//  import "./adminhome.css";
//  import AdminCreateCampaign from "./AdminCreateCampain";
 
//  const AdminHome = () => {
//    const navigate = useNavigate();
//    const [showCreateForm, setShowCreateForm] = useState(false);
//    const [campaigns, setCampaigns] = useState([]);
 
//    useEffect(() => {
//      const userRole = localStorage.getItem("userRole");
 
//      if (userRole !== "admin") {
//        navigate("/login");
//      }
 
//      fetchCampaigns();
//    }, [navigate]);
 
//    const fetchCampaigns = async () => {
//      try {
//        const response = await fetch("http://localhost:4000/api/campaigns/all");
 
//        if (!response.ok) {
//          throw new Error(`HTTP Error! Status: ${response.status}`);
//        }
 
//        const data = await response.json();
//        setCampaigns(data);
//      } catch (error) {
//        console.error("❌ Error fetching campaigns:", error);
//      }
//    };
 
//    return (
//      <div className="admin-home-container">
//        <div className="adm">
//          <Link to="/Login">
//            <span>Login</span>
//          </Link>
//        </div>
 
//        <div className="ad-head">
//          <h2>Welcome, Admin!</h2>
//        </div>
//        <p>Manage and create fundraising campaigns.</p>
 
//        <button onClick={() => setShowCreateForm(!showCreateForm)}>
//          {showCreateForm ? "Close Form" : "Create a Campaign"}
//        </button>
 
//        {showCreateForm && <AdminCreateCampaign />}
 
//        <h2 className="ad-camp">Ongoing Campaigns</h2>
 
//        {campaigns.length > 0 ? <Cards campaigns={campaigns} /> : <p>No campaigns found.</p>}
//      </div>
//    );
//  };
 
//  export default AdminHome;
 


// time 5 30


// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Cards from "../components/Cards";
// import "./adminhome.css";
// import AdminCreateCampaign from "./AdminCreateCampain";

// const AdminHome = () => {
//   const navigate = useNavigate();
//   const [showCreateForm, setShowCreateForm] = useState(false);
//   const [campaigns, setCampaigns] = useState([]);
//   const [contactMessages, setContactMessages] = useState([]); // ✅ Contact messages state
//   const [opencampaign, setOpenCampaign] = useState(false); // ✅ Fixed naming

//   useEffect(() => {
//     const userRole = localStorage.getItem("userRole");

//     if (userRole !== "admin") {
//       navigate("/login");
//     }

//     fetchCampaigns();
//     fetchContactMessages(); // ✅ Fetch contact messages
//   }, [navigate]);

//   const fetchCampaigns = async () => {
//     try {
//       const response = await fetch("http://localhost:4000/api/campaigns/all");

//       if (!response.ok) {
//         throw new Error(`HTTP Error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       setCampaigns(data);
//     } catch (error) {
//       console.error("❌ Error fetching campaigns:", error);
//     }
//   };

//   // ✅ Fetch contact messages from backend
//   const fetchContactMessages = async () => {
//     try {
//       const response = await fetch("http://localhost:4000/api/contact/messages");
//       if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
//       const data = await response.json();
//       setContactMessages(data);
//     } catch (error) {
//       console.error("❌ Error fetching contact messages:", error);
//     }
//   };

//   return (
//     <div className="admin-home-container">
//       <div className="adm">
//         <Link to="/Login">
//           <span>Login</span>
//         </Link>
//         <Link to="/Home">
//           <span>Home</span>
//         </Link>
//       </div>

//       <div className="ad-head">
//         <h2>Welcome, Admin!</h2>
//       </div>
//       <p>Manage campaigns and view contact messages.</p>

//       <button onClick={() => setShowCreateForm(!showCreateForm)}>
//         {showCreateForm ? "Close Form" : "Create a Campaign"}
//       </button>

//       {/* ✅ Fixed the button syntax */}
//       <button onClick={() => setOpenCampaign(!opencampaign)}>
//         {opencampaign ? "Hide Ongoing Campaigns" : "Show Ongoing Campaigns"}
//       </button>

//       {showCreateForm && <AdminCreateCampaign />}

//       {/* ✅ Show ongoing campaigns if opencampaign is true */}
//       {opencampaign && (
//         <>
//           <h2 className="ad-camp">Ongoing Campaigns</h2>
//           {campaigns.length > 0 ? <Cards campaigns={campaigns} /> : <p>No campaigns found.</p>}
//           <button>delete</button>
          
//         </>
//       )}

//       {/* ✅ Contact Messages Section */}
//       <h2 className="ad-camp">Contact Messages</h2>
//       <div className="contact-messages">
//         {contactMessages.length > 0 ? (
//           contactMessages.map((msg) => (
//             <div key={msg._id} className="message-card">
//               <h3>Name: {msg.name}</h3>
//               <p>Email: {msg.email}</p>
//               <p>Phone: {msg.phone}</p>
//               <p>Message: {msg.message}</p>
//             </div>
//           ))
//         ) : (
//           <p>No contact messages found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminHome;


// // delete button added /edit /


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../components/Cards";
import "./adminhome.css";
import AdminCreateCampaign from "./AdminCreateCampain";

const AdminHome = () => {
  const navigate = useNavigate();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [opencampaign, setOpenCampaign] = useState(false);
  const [editCampaign, setEditCampaign] = useState(null);

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "admin") {
      navigate("/login");
    }
    fetchCampaigns();
    fetchContactMessages();
  }, [navigate]);

  const fetchCampaigns = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/campaigns/all");
      if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
      const data = await response.json();
      setCampaigns(data);
    } catch (error) {
      console.error("❌ Error fetching campaigns:", error);
    }
  };

  const fetchContactMessages = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/contact/messages");
      if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
      const data = await response.json();
      setContactMessages(data);
    } catch (error) {
      console.error("❌ Error fetching contact messages:", error);
    }
  };

  // ✅ Delete Campaign Function
  const handleDeleteCampaign = async (campaignId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this campaign?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:4000/api/campaigns/${campaignId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

      setCampaigns(campaigns.filter((campaign) => campaign._id !== campaignId));
      alert("Campaign deleted successfully!");
    } catch (error) {
      console.error("❌ Error deleting campaign:", error);
      alert("Failed to delete campaign.");
    }
  };

  // ✅ Edit Campaign Function
  const handleEditCampaign = (campaign) => {
    console.log("📝 Edit button clicked for:", campaign); // Log when button is clicked
    setEditCampaign(campaign);

    // Delay opening form slightly to allow state update
    setTimeout(() => {
      setShowCreateForm(true);
      console.log("📂 Form opened for editing!");
    }, 100);
  };

  return (
//     <div className="admin-home-container">
//       <div className="adm">
//         <Link to="/Login">
//           <span>Login</span>
//         </Link>
//         <Link to="/Home">
//           <span>Home</span>
//         </Link>
//       </div>

//       <div className="ad-head">
//         <h2>Welcome, Admin!</h2>
//       </div>
//       <p>Manage campaigns and view contact messages.</p>

//       {/* Button to create a new campaign */}
//       <button onClick={() => {
//         setShowCreateForm(!showCreateForm);
//         setEditCampaign(null);
//         console.log("🆕 Create button clicked. Opening form:", !showCreateForm);
//       }}>
//         {showCreateForm ? "Close Form" : "Create a Campaign"}
//       </button>

//       {/* Button to toggle campaign list */}
//       <button onClick={() => setOpenCampaign(!opencampaign)}>
//         {opencampaign ? "Hide Ongoing Campaigns" : "Show Ongoing Campaigns"}
//       </button>

//       {/* ✅ Show campaign form for creating or editing */}
//       {showCreateForm && (
//   <div className="overlay">
//     <div className="modal">
//       <AdminCreateCampaign 
//         campaign={editCampaign} 
//         refreshCampaigns={fetchCampaigns} 
//         closeForm={() => {
//           setShowCreateForm(false);
//           setEditCampaign(null);
//           console.log("❌ Form closed.");
//         }}
//       />
//     </div>
//   </div>
// )}


//       {/* ✅ Show ongoing campaigns if opencampaign is true */}
//       {opencampaign && (
//         <>
//           <h2 className="ad-camp">Ongoing Campaigns</h2>
//           <div className="campaign-list">
//             {campaigns.length > 0 ? (
//               campaigns.map((campaign) => (
//                 <div key={campaign._id} className="campaign-card">
//                   <Cards campaigns={[campaign]} />
//                   <button className="delete-btn" onClick={() => handleDeleteCampaign(campaign._id)}>
//                     Delete
//                   </button>
//                   <button className="edit-btn" onClick={() => handleEditCampaign(campaign)}>
//                     Edit
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p>No campaigns found.</p>
//             )}
//           </div>
//         </>
//       )}

//       {/* Contact Messages Section */}
//       <h2 className="ad-camp">Contact Messages</h2>
//       <div className="contact-messages">
//         {contactMessages.length > 0 ? (
//           contactMessages.map((msg) => (
//             <div key={msg._id} className="message-card">
//               <h3>Name: {msg.name}</h3>
//               <p>Email: {msg.email}</p>
//               <p>Phone: {msg.phone}</p>
//               <p>Message: {msg.message}</p>
//             </div>
//           ))
//         ) : (
//           <p>No contact messages found.</p>
//         )}
//       </div>
//     </div>

<div className="admin-home-container">
<div className="adm">
  <Link to="/Login">
    <span>Login</span>
  </Link>
  <Link to="/Home">
    <span>Home</span>
  </Link>
</div>

<div className="ad-head">
  <h2>Welcome, Admin!</h2>
</div>
<p>Manage campaigns and view contact messages.</p>

{/* Button to create a new campaign */}
<div className="admin-btn">
  <button
    onClick={() => {
      setShowCreateForm(!showCreateForm);
      setEditCampaign(null);
      console.log("🆕 Create button clicked. Opening form:", !showCreateForm);
    }}
    className="create-camp"
  >
    {showCreateForm ? "Close Form" : "Create a Campaign"}
  </button>

  {/* Button to toggle campaign list */}
  <button onClick={() => setOpenCampaign(!opencampaign)} className="create-camp">
    {opencampaign ? "Hide Ongoing Campaigns" : "Show Ongoing Campaigns"}
  </button>
</div>

{/* ✅ Show campaign form for creating or editing */}
{showCreateForm && (
  <div className="overlay1">
    <div className="modal1">
      <AdminCreateCampaign
        campaign={editCampaign}
        refreshCampaigns={fetchCampaigns}
        closeForm={() => {
          setShowCreateForm(false);
          setEditCampaign(null);
          console.log("❌ Form closed.");
        }}
      />
    </div>
  </div>
)}

{/* ✅ Show ongoing campaigns if opencampaign is true */}
{opencampaign && (
  <>
    <h2 className="ad-camp">Ongoing Campaigns</h2>
    <div className="campaign-list">
      {campaigns.length > 0 ? (
        campaigns.map((campaign) => (
          <div key={campaign._id} className="campaign-card">
            <Cards campaigns={[campaign]} />
            <div className="ad-we">
            <button className="delete-btn" onClick={() => handleDeleteCampaign(campaign._id)}>
              Delete
            </button>
            <button className="edit-btn" onClick={() => handleEditCampaign(campaign)}>
              Edit
            </button>
            </div>
          </div>
        ))
      ) : (
        <p>No campaigns found.</p>
      )}
    </div>
  </>
)}

{/* Contact Messages Section */}
<h2 className="ad-camp">Contact Messages</h2>
<div className="contact-messages">
  {contactMessages.length > 0 ? (
    contactMessages.map((msg) => (
      <div key={msg._id} className="message-card">
        <h3>Name: {msg.name}</h3>
        <p>Email: {msg.email}</p>
        <p>Phone: {msg.phone}</p>
        <p>Message: {msg.message}</p>
      </div>
    ))
  ) : (
    <p>No contact messages found.</p>
  )}
</div>
</div>
  );
};

export default AdminHome;
