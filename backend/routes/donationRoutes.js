const express = require("express");
const router = express.Router();
const Register = require("../models/register"); // Ensure correct import
const Campaign = require("../models/Campaigns"); // Ensure correct import

// ✅ Handle Donation
router.post("/donate", async (req, res) => {
  try {
    const { userId, campaignId, amount } = req.body;

    console.log("Received Donation Request:", req.body); // Debugging

    // Validate input
    if (!userId || !campaignId || !amount) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Check if user exists
    const user = await Register.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ Check if campaign exists
    const campaign = await Campaign.findById(campaignId);
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    // ✅ Store donation in User model
    user.donations.push({ campaignId, amount });
    await user.save();

    // ✅ Update Campaign's raised amount
    campaign.raised += amount;
    await campaign.save();

    res.status(200).json({ message: "Donation successful!", campaign });
  } catch (error) {
    console.error("Donation Error:", error); // Debugging
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
