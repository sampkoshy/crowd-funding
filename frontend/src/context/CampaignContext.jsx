import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const userId = localStorage.getItem("userId");

    // ✅ Fetch selected campaign from the backend when user logs in
    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:3000/api/campaigns/selected-campaign/${userId}`)
                .then(res => setSelectedCampaign(res.data.selectedCampaign))
                .catch(err => console.error("Error fetching selected campaign:", err));
        }
    }, [userId]);

    return (
        <CampaignContext.Provider value={{ selectedCampaign, setSelectedCampaign }}>
            {children}
        </CampaignContext.Provider>
    );
};

export const useCampaign = () => useContext(CampaignContext);
