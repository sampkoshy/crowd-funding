// import React, { useState } from "react";
// import "./admincreatecampain.css";

// const AdminCreateCampaign = ({ addCampaign }) => {
//   // ✅ Individual `useState` for each field
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [goal, setGoal] = useState("");
//   const [location, setLocation] = useState("");
//   const [image, setImage] = useState("");
//   const [date, setDate] = useState("");
//   const [message, setMessage] = useState("");

//   // ✅ Handle Form Submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // ✅ Validate Required Fields
//     if (!title || !description || !goal || !location || !image || !date) {
//       setMessage("❌ All fields are required!");
//       return;
//     }

//     // ✅ Validate Image URL
//     if (!image.startsWith("http://") && !image.startsWith("https://")) {
//       setMessage("❌ Invalid Image URL. Use a valid link.");
//       return;
//     }

//     // ✅ Create Campaign Object with Date
//     const newCampaign = {
//       id: Date.now(),
//       title,
//       description,
//       goal,
//       location,
//       image,
//       date, // ✅ Store date from input
//     };

//     console.log("✅ Campaign Created:", newCampaign);
//     addCampaign(newCampaign);
//     setMessage("✅ Campaign created successfully!");

//     // ✅ Reset Fields
//     setTitle("");
//     setDescription("");
//     setGoal("");
//     setLocation("");
//     setImage("");
//     setDate("");
//   };

//   return (
//     <div className="admin-campaign-container">
//       <h2>Create a New Campaign</h2>
//       {message && <p className="message">{message}</p>}
//       <form onSubmit={handleSubmit} className="campaign-form">
//         <label>Title</label>
//         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

//         <label>Description</label>
//         <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

//         <label>Goal Amount ($)</label>
//         <input type="number" value={goal} onChange={(e) => setGoal(e.target.value)} required />

//         <label>Location</label>
//         <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />

//         <label>Image URL</label>
//         <input type="url" value={image} onChange={(e) => setImage(e.target.value)} required />

//         <label>Date</label>
//         <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

//         <button type="submit" className="submit-button">Create Campaign</button>
//       </form>
//     </div>
//   );
// };

// export default AdminCreateCampaign;


import React, { useState, useEffect } from "react";
import "./admincreatecampain.css";

const AdminCreateCampaign = ({ campaign, refreshCampaigns, closeForm }) => {
  // ✅ State for form fields
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal: "",
    location: "",
    image: "",
    date: "",
  });
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // ✅ Effect to Load Data for Editing
  useEffect(() => {
    if (campaign) {
      console.log("📥 Editing Campaign Data Loaded:", campaign);
      setFormData({
        title: campaign.title || "",
        description: campaign.description || "",
        goal: campaign.goal || "",
        location: campaign.location || "",
        image: campaign.image || "",
        date: campaign.date || "",
      });
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [campaign]);

  // ✅ Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validate Required Fields
    const { title, description, goal, location, image, date } = formData;
    if (!title || !description || !goal || !location || !image || !date) {
      setMessage("❌ All fields are required!");
      console.log("⚠️ Form validation failed: Missing fields");
      return;
    }

    // ✅ Validate Image URL
    if (!image.startsWith("http://") && !image.startsWith("https://")) {
      setMessage("❌ Invalid Image URL. Use a valid link.");
      console.log("⚠️ Invalid Image URL:", image);
      return;
    }

    // ✅ Get User ID from Local Storage
    const userId = localStorage.getItem("userId");
    const campaignData = {
      ...formData,
      goal: Number(goal), // Convert goal to number
      createdBy: userId, // ✅ Ensure this is included
    };

    console.log(isEditing ? "📝 Updating Campaign:" : "🚀 Creating Campaign:", campaignData);

    try {
      const method = isEditing ? "PUT" : "POST";
      const url = isEditing
        ? `http://localhost:4000/api/campaigns/${campaign._id}`
        : "http://localhost:4000/api/campaigns/create";

      console.log(`📡 Sending ${method} request to:`, url);

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(campaignData),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Campaign Success Response:", data);
      setMessage(isEditing ? "✅ Campaign updated successfully!" : "✅ Campaign created successfully!");

      // ✅ Refresh the campaign list & close form
      refreshCampaigns();
      closeForm();
    } catch (error) {
      console.error("❌ Error submitting campaign:", error);
      setMessage("❌ Failed to submit campaign. Try again.");
    }
  };

  return (
    <div className="admin-campaign-container">
      <h2>{isEditing ? "Edit Campaign" : "Create a New Campaign"}</h2>
      {message && <p className="message">{message}</p>}
      
      <form onSubmit={handleSubmit} className="campaign-form">
        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <label>Goal Amount ($)</label>
        <input type="number" name="goal" value={formData.goal} onChange={handleChange} required />

        <label>Location</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />

        <label>Image URL</label>
        <input type="url" name="image" value={formData.image} onChange={handleChange} required />

        <label>Date</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        <button type="submit" className="submit-button">
          {isEditing ? "Update Campaign" : "Create Campaign"}
        </button>
        <button type="button" className="cancel-button" onClick={closeForm}>Cancel</button>
      </form>
    </div>
  );
};

export default AdminCreateCampaign;
