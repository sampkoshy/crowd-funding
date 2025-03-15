
// const express =require('express')
// const  Campaign =require('../models/Campaigns')


// const router = express.Router();

// // ✅ Create a new campaign
// router.post("/create", async (req, res) => {
//   try {
//     const { title, description, goal, location, image } = req.body;

//     // ✅ Validate input
//     if (!title || !description || !goal || !location || !image) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // ✅ Get current date
//     const date = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

//     // ✅ Create a new campaign
//     const newCampaign = new Campaign({
//       title,
//       description,
//       created: new Date(), // ✅ Add the created date explicitly
//       location,
//       image,
//       progress: 0,
//       raised: 0,
//       goal,
//     });

//     // ✅ Save to database
//     await newCampaign.save();

//     res.status(201).json({ message: "Campaign created successfully", newCampaign });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// // ✅ Fetch all campaigns
// router.get("/all", async (req, res) => {
//   try {
//     const campaigns = await Campaign.find();
//     res.status(200).json(campaigns);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// module.exports= router;

//change beasues of chatgpt 12 50

const express = require("express");
const Campaign = require("../models/Campaigns");

const router = express.Router();

// ✅ Create a new campaign
// router.post("/create", async (req, res) => {
//   try {
//     const { title, description, goal, location, image , createdBy } = req.body;

//     // ✅ Validate input
//     if (!title || !description || !goal || !location || !image || !createdBy) {
      
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // ✅ Create a new campaign
//     const newCampaign = new Campaign({
//       title,
//       description,
//       created: new Date(), // ✅ Add the created date explicitly
//       location,
//       image,
//       progress: 0,
//       raised: 0,
//       goal,
//       createdBy,
//       // createdBy: userId,
   
      
//     });

//     // ✅ Save to database
//     await newCampaign.save();

//     res.status(201).json({ message: "Campaign created successfully", newCampaign });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

router.post("/create", async (req, res) => {
  try {
    console.log("🔍 Received Payload:", req.body); // ✅ Debugging line

    const { title, description, goal, location, image, createdBy } = req.body;

    if (!title || !description || !goal || !location || !image || !createdBy) {
      console.log("❌ Missing Fields"); // ✅ Debugging line
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCampaign = new Campaign({
      title,
      description,
      created: new Date(),
      location,
      image,
      progress: 0,
      raised: 0,
      goal,
      createdBy,
    });

    await newCampaign.save();
    console.log("✅ Campaign Created Successfully:", newCampaign);

    res.status(201).json({ message: "Campaign created successfully", newCampaign });
  } catch (error) {
    console.error("🚨 Campaign Creation Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});



// ✅ Fetch all campaigns (fixed route to match frontend)
router.get("/all", async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;

