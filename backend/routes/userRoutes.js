// const express = require("express");
// const User = require("../models/User");
// const router = express.Router();

// // ✅ Save selected campaign for a user
// router.post("/selectCampaign", async (req, res) => {
//   const { userId, campaignId } = req.body;

//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.selectedCampaign = campaignId; // ✅ Store selected campaign ID
//     await user.save();

//     res.status(200).json({ message: "Campaign selected successfully", user });
//   } catch (error) {
//     res.status(500).json({ message: "Error saving campaign", error });
//   }
// });
// //(time 6 00)

//   // ✅ Fetch selected campaign for user
// router.get("/:userId/selected-campaign", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.userId).populate("selectedCampaign");
//     if (!user || !user.selectedCampaign) {
//       return res.status(404).json({ message: "No campaign selected" });
//     }

//     res.status(200).json(user.selectedCampaign);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });



// module.exports = router;

//time 11 20

const express = require("express");
const User = require("../models/User");
const router = express.Router();

// ✅ Save selected campaign for a user
router.post("/selectCampaign", async (req, res) => {
  const { userId, campaignId } = req.body;

  // Validate input
  if (!userId || !campaignId) {
    return res.status(400).json({ message: "User ID and Campaign ID are required" });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.selectedCampaign = campaignId; // ✅ Store selected campaign ID
    await user.save();

    res.status(200).json({ message: "Campaign selected successfully", user });
  } catch (error) {
    console.error("Error saving campaign:", error); // Debugging
    res.status(500).json({ message: "Error saving campaign", error });
  }
});

// ✅ Fetch selected campaign for user
router.get("/:userId/selected-campaign", async (req, res) => {
  const { userId } = req.params;

  // Validate input
  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const user = await User.findById(userId).populate("selectedCampaign");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.selectedCampaign) {
      return res.status(404).json({ message: "No campaign selected" });
    }

    res.status(200).json(user.selectedCampaign);
  } catch (error) {
    console.error("Error fetching selected campaign:", error); // Debugging
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;