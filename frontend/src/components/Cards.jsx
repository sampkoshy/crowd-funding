


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import WithLabelExample from "../other-components/WithLabelExample";  // ✅ Import the reusable Progress Bar
import "./cards.css";

import { ToastContainer, toast } from 'react-toastify';


const Cards = ({ campaigns }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    // toast.warn("⚠️ Testing Toast Warning...");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleDonate = async (campaign) => {
    // 🔴 Check if campaign goal is already reached
    if (campaign.raised >= campaign.goal) {
      toast.error("This campaign has ended because the goal amount has been reached.");
      // alert("This campaign has ended because the goal amount has been reached.");
      return;
    }

    if (!user) {
      console.log("User is not logged in!");
      
      toast("⚠️ Please log in to donate.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    
      // 🔥 Delay navigation to allow toast to be seen
      setTimeout(() => {
        navigate(`/Login?id=${campaign._id}`);
      }, 1000); // 2-second delay
    
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
      toast.success("✅ Campaign Selected! Redirecting...");
      // console.log("✅ Selected Campaign Stored:", campaign);
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
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
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

              {/* ✅ Use Reusable ProgressBar Component */}
              <div className="card-progress">
                <WithLabelExample progress={progress} />
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
