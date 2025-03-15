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

// const express = require("express");
// const User = require("../models/User");
// const router = express.Router();

// // ✅ Save selected campaign for a user
// router.post("/selectCampaign", async (req, res) => {
//   const { userId, campaignId } = req.body;

//   // Validate input
//   if (!userId || !campaignId) {
//     return res.status(400).json({ message: "User ID and Campaign ID are required" });
//   }

//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.selectedCampaign = campaignId; // ✅ Store selected campaign ID
//     await user.save();

//     res.status(200).json({ message: "Campaign selected successfully", user });
//   } catch (error) {
//     console.error("Error saving campaign:", error); // Debugging
//     res.status(500).json({ message: "Error saving campaign", error });
//   }
// });




// // ✅ Fetch selected campaign for user
// router.get("/:userId/selected-campaign", async (req, res) => {
//   const { userId } = req.params;

//   // Validate input
//   if (!userId) {
//     return res.status(400).json({ message: "User ID is required" });
//   }

//   try {
//     const user = await User.findById(userId).populate("selectedCampaign");
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     if (!user.selectedCampaign) {
//       return res.status(404).json({ message: "No campaign selected" });
//     }

//     res.status(200).json(user.selectedCampaign);
//   } catch (error) {
//     console.error("Error fetching selected campaign:", error); // Debugging
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// module.exports = router;

// 1 30
// amal bro paranja code

// const express = require("express");
// const User = require("../models/User");
// const router = express.Router();

// // ✅ Save selected campaign for a user
// // router.post("/selected-campaign/:id", async (req, res) => {
// //   const {id } = req.params;
// // this id = the id of the campaign selected by the user
// // compaigns [{}, {}]
// // mongodb id === id
// // Import the Campaign model

// // Route to get the selected campaign by ID
// router.post("/selected-campaign/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     // ✅ Find the campaign in MongoDB where `_id` matches `id`
//     const campaign = await Campaigns.findOne({ _id: id });

//     // ✅ Check if campaign exists
//     if (!campaign) {
//       return res.status(404).json({ message: "Campaign not found" });
//     }

//     res.status(200).json(campaign); // ✅ Send the selected campaign as response
//   } catch (error) {
//     console.error("❌ Error fetching campaign:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });




//   // Validate input
//   // if (!id) {
//   //   return res.status(400).json({ message: "User ID and Campaign ID are required" });
//   // }

//   // try {
//   //   const user = await User.findById(userId);
//   //   if (!user) {
//   //     return res.status(404).json({ message: "User not found" });
//   //   }

//   //   user.selectedCampaign = campaignId; // ✅ Store selected campaign ID
//   //   await user.save();

//   //   res.status(200).json({ message: "Campaign selected successfully", campgainDetails });
//   // } catch (error) {
//   //   console.error("Error saving campaign:", error);
//   //   res.status(500).json({ message: "Error saving campaign", error });
//   // }
// });

// // // ✅ Fetch selected campaign for user
// // router.get("/:userId/selected-campaign", async (req, res) => {
// //   const { userId } = req.params;

// //   if (!userId) {
// //     return res.status(400).json({ message: "User ID is required" });
// //   }

// //   try {
// //     const user = await User.findById(userId).populate("selectedCampaign");
// //     if (!user) {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     if (!user.selectedCampaign) {
// //       return res.status(404).json({ message: "No campaign selected" });
// //     }

// //     res.status(200).json(user.selectedCampaign);
// //   } catch (error) {
// //     console.error("Error fetching selected campaign:", error);
// //     res.status(500).json({ message: "Server error", error });
// //   }
// // });


// router.get("/selected-campaign", async (req, res) => {
 
//   console.log(`🔍 Fetching selected campaign for user: ${userId}`);

//   if (!userId) {
//     console.log("❌ No userId provided");
//     return res.status(400).json({ message: "User ID is required" });
//   }

//   try {
//     const user = await User.findById(userId).populate("selectedCampaign");
    
//     if (!user) {
//       console.log("❌ User not found");
//       return res.status(404).json({ message: "User not found" });
//     }

//     if (!user.selectedCampaign) {
//       console.log("❌ No campaign selected for this user");
//       return res.status(404).json({ message: "No campaign selected" });
//     }

//     console.log("✅ Selected campaign found:", user.selectedCampaign);
//     res.status(200).json(user.selectedCampaign);
//   } catch (error) {
//     console.error("❌ Error fetching selected campaign:", error);
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// module.exports = router;



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
