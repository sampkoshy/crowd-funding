// import React, { useEffect, useState } from "react";
// import Section from "../other-components/Section";
// import Cards from "../components/Cards";

// const Home = () => {
//   const [campaigns, setCampaigns] = useState([]); // ✅ Store campaigns

//   useEffect(() => {
//     fetchCampaigns();
//   }, []);

//   const fetchCampaigns = async () => {
//     try {
//       const response = await fetch("http://localhost:4000/api/campaigns/all"); // ✅ Correct endpoint
//       const data = await response.json();
//       if (Array.isArray(data)) {
//         setCampaigns(data);
//       } else {
//         console.error("⚠️ API response is not an array:", data);
//       }
//     } catch (error) {
//       console.error("❌ Error fetching campaigns:", error);
//     }
//   };

//   return (
//     <div>
//       <Section />
//       <Cards campaigns={campaigns} />  {/* ✅ Pass campaigns as a prop */}
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import Section from "../other-components/Section"; // ✅ Ensure correct import
import Footer from "../components/Footer";
import Carol from "../other-components/Carol";
import axios from "axios";
import './home.css'
import Cards from "../components/Cards"; // ✅ Ensure Cards is exported

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchCampaigns(); // ✅ Fetch campaigns when component mounts
  }, []);

  // ✅ Function to fetch all campaigns
  const fetchCampaigns = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/campaigns/all"); // ✅ Correct API call
      console.log("Campaigns fetched:", response.data);
      setCampaigns(response.data); // ✅ Save campaigns to state
    } catch (error) {
      console.error("❌ Error fetching campaigns:", error);
    }
  };

  return (
    <div>
      <Carol/>
    {/* ✅ Correct component usage */}
      <h1 className="home-camp">All Campaigns</h1>
      {campaigns.length > 0 ? (
        <Cards campaigns={campaigns} /> // ✅ Pass campaigns to Cards component
      ) : (
        <p>No campaigns found.</p>
      )}
        <Section /> 
      <Footer/>
    </div>
  );
};

export default Home;
