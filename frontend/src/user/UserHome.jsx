

 // ithu mataruh
// // 




import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import './userhome.css'

const UserHome = () => {
  const location = useLocation();
  const data = location.state || {}; // ✅ Prevents errors if state is undefined
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("userName");

    if (!userId || !userName) {
      navigate("/Login"); // ✅ Redirect if not logged in
      return;
    }

    setUser({ _id: userId, name: userName });

    fetchSelectedCampaign(userId);
    fetchAllCampaigns();
  }, [navigate]);

  const fetchSelectedCampaign = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/users/${userId}/selected-campaign`
      );
      if (response.status === 200) {
        setSelectedCampaign(response.data);
      }
    } catch (error) {
      console.error("❌ Error fetching selected campaign:", error);
    }
  };

  const fetchAllCampaigns = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/campaigns/all"
      );
      if (response.status === 200) {
        setCampaigns(response.data);
      }
    } catch (error) {
      console.error("❌ Error fetching campaigns:", error);
    }
  };

  const handleSelectCampaign = async (id) => {
    try {
      await axios.post(`http://localhost:4000/api/users/select-campaign/${id}`, {
        campaignId: id, // ✅ Pass correct ID
      });

      // ✅ Find and update selected campaign
      const selected = campaigns.find((c) => c._id === id);
      if (selected) {
        setSelectedCampaign(selected);
      }
    } catch (error) {
      console.error("❌ Error selecting campaign:", error);
    }
  };
  console.log(data.id, campaigns, 'hehheheh')

  return (
    <div>
      <h1 className="user-home-wel">Welcome, {user?.name || "Guest"}</h1>

      <h2 className="user-ce">Your Selected Campaign</h2>
      <div className="campaign-list">
        {campaigns
          .filter((campaign) => campaign._id === data.id) // ✅ Filter to find the correct campaign
          .map((campaign) => (
            <div key={campaign._id} className="campaign-card">
             
              <img
                src={campaign.image || "default-image.jpg"}
                alt="Campaign"
                width="300px"

                className="user-img"
              />
               <h3>{campaign.title}</h3>
               <p>
                <strong>Location:</strong> {campaign.location}
              </p>
              <p>
                <strong>Goal:</strong> {campaign.goal}
              </p>
             
              <p>{campaign.description}</p>
              <button
                onClick={() => {
                  handleSelectCampaign(campaign._id);
                  navigate("/donate", { state: { campaign } });
                }}
               className="user-paybtn">
                Pay Now
              </button>
            </div>
          ))}
      </div>

      {selectedCampaign ? (
        <p>✅ Selected Campaign: {selectedCampaign.title}</p>
      ) : (
        <p></p>
      )}

      <h2>All Available Campaigns</h2>
      <div className="campaign-list">
        {campaigns.map((campaign) => (
          <div key={campaign._id} className="campaign-item">
            <img
              src={campaign.image || "default-image.jpg"}
              alt="No image"
              width="300px"
            />
            <h3>{campaign.title}</h3>
            <p>
              <strong>Description:</strong> {campaign.description}
            </p>
            <button
              onClick={() => {
                handleSelectCampaign(campaign._id);
                navigate("/donate", { state: { campaign } });
              }}
             className="user-paybtn">
              Donate Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserHome;

