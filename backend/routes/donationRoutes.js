// const express = require("express");
// const router = express.Router();
// const Register = require("../models/register"); // Ensure correct import
// const Campaign = require("../models/Campaigns"); // Ensure correct import

// // ✅ Handle Donation
// // router.post("/donate", async (req, res) => {
// //   try {
// //     const { userId, campaignId, amount } = req.body;

// //     console.log("Received Donation Request:", req.body); // Debugging

// //     // Validate input
// //     if (!userId || !campaignId || !amount) {
// //       return res.status(400).json({ message: "All fields are required" });
// //     }
// app.post("/api/donations/donate", async (req, res) => {
//   console.log("🔍 Received Payload:", req.body);

//   const { campaignId, amount, cardNumber, expiryMonth, expiryYear, cvv } = req.body;

//   if (!campaignId || !amount || !cardNumber || !expiryMonth || !expiryYear || !cvv) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   // ✅ Continue with donation logic


//     // ✅ Check if user exists
//     const user = await Register.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // ✅ Check if campaign exists
//     const campaign = await Campaign.findById(campaignId);
//     if (!campaign) {
//       return res.status(404).json({ message: "Campaign not found" });
//     }

//     // ✅ Store donation in User model
//     user.donations.push({ campaignId, amount });
//     await user.save();

//     // ✅ Update Campaign's raised amount
//     campaign.raised += amount;
//     await campaign.save();

//     res.status(200).json({ message: "Donation successful!", campaign });
//   } catch (error) {
//     console.error("Donation Error:", error); // Debugging
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Register = require("../models/register");
const Campaign = require("../models/Campaigns");

// 🛠 Middleware: Validate request body
const validateDonation = (req, res, next) => {
  const { userId, campaignId, amount, cardNumber, expiryMonth, expiryYear, cvv } = req.body;
  if (!userId || !campaignId || !amount || !cardNumber || !expiryMonth || !expiryYear || !cvv) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Ensure amount is a valid number
  req.body.amount = parseFloat(amount);
  if (isNaN(req.body.amount) || req.body.amount <= 0) {
    return res.status(400).json({ message: "Invalid donation amount" });
  }

  next();
};

// 🎯 Donation Route
router.post("/donate", validateDonation, async (req, res) => {
  try {
    console.log("🔍 Received Payload:", req.body);

    const { userId, campaignId, amount } = req.body;

    // ✅ Check if user exists
    const user = await Register.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log("✅ User found:", user._id);

    // ✅ Check if campaign exists
    const campaign = await Campaign.findById(campaignId);
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }
    console.log("✅ Campaign found:", campaign._id);

    // ✅ Ensure `createdBy` exists
    if (!campaign.createdBy) {
      return res.status(400).json({ message: "Campaign is missing required field: createdBy" });
    }
    console.log("✅ Campaign has createdBy:", campaign.createdBy);

    // ✅ Store donation in User model
    user.donations = user.donations || [];
    user.donations.push({ campaignId, amount });
    await user.save();
    console.log("✅ Donation saved in user profile.");

    // ✅ Update campaign's raised amount
    campaign.raised = (campaign.raised || 0) + amount;
    await campaign.save();
    console.log("✅ Campaign updated with new raised amount:", campaign.raised);

    return res.status(200).json({ message: "Donation successful!", campaign });
  } catch (error) {
    console.error("🚨 Donation Error:", error);
    return res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
