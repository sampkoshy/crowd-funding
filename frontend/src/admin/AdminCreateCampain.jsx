import React, { useState } from "react";
import "./admincreatecampain.css";

const AdminCreateCampaign = ({ addCampaign }) => {
  // ✅ Individual `useState` for each field
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validate Required Fields
    if (!title || !description || !goal || !location || !image || !date) {
      setMessage("❌ All fields are required!");
      return;
    }

    // ✅ Validate Image URL
    if (!image.startsWith("http://") && !image.startsWith("https://")) {
      setMessage("❌ Invalid Image URL. Use a valid link.");
      return;
    }

    // ✅ Create Campaign Object with Date
    const newCampaign = {
      id: Date.now(),
      title,
      description,
      goal,
      location,
      image,
      date, // ✅ Store date from input
    };

    console.log("✅ Campaign Created:", newCampaign);
    addCampaign(newCampaign);
    setMessage("✅ Campaign created successfully!");

    // ✅ Reset Fields
    setTitle("");
    setDescription("");
    setGoal("");
    setLocation("");
    setImage("");
    setDate("");
  };

  return (
    <div className="admin-campaign-container">
      <h2>Create a New Campaign</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="campaign-form">
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Goal Amount ($)</label>
        <input type="number" value={goal} onChange={(e) => setGoal(e.target.value)} required />

        <label>Location</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />

        <label>Image URL</label>
        <input type="url" value={image} onChange={(e) => setImage(e.target.value)} required />

        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <button type="submit" className="submit-button">Create Campaign</button>
      </form>
    </div>
  );
};

export default AdminCreateCampaign;

