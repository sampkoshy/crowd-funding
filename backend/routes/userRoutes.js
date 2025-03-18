

const express = require("express");
const User = require("../models/User");
const Campaign = require("../models/Campaigns"); // ✅ Import the Campaign model
const router = express.Router();

// ✅ Save selected campaign for a user
router.post("/selected-campaign/:id", async (req, res) => {
  const { id } = req.params; // Campaign ID
  const { userId } = req.body; // User ID should come from frontend request

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    // ✅ Find the campaign by ID
    const campaign = await Campaign.findById(id);
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    // ✅ Find the user and update selectedCampaign field
    const user = await User.findByIdAndUpdate(
      userId,
      { selectedCampaign: id },
      { new: true }
    ).populate("selectedCampaign"); // Populate campaign data

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Campaign selected successfully",
      selectedCampaign: user.selectedCampaign,
    });
  } catch (error) {
    console.error("❌ Error selecting campaign:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// ✅ Fetch selected campaign for a user
router.get("/selected-campaign/:userId", async (req, res) => {
  const { userId } = req.params; // Get userId from URL params

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    // ✅ Find user and populate selected campaign
    const user = await User.findById(userId).populate("selectedCampaign");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.selectedCampaign) {
      return res.status(404).json({ message: "No campaign selected" });
    }

    res.status(200).json(user.selectedCampaign);
  } catch (error) {
    console.error("❌ Error fetching selected campaign:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
