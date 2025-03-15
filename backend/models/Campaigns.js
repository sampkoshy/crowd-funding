// const mongoose = require("mongoose");

// const CampaignSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   created: { type: Date, default: Date.now },
//   location: { type: String, required: true },
//   image: { type: String, required: true },
//   progress: { type: Number, default: 0 },
//   raised: { type: Number, default: 0 },
//   goal: { type: Number, required: true },
// });

// module.exports = mongoose.model("Campaign", CampaignSchema);
// // time night 11 20 changing beacuse of new feature
const mongoose = require("mongoose");
const CampaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  goal: { type: Number, required: true },
  raised: { type: Number, default: 0 },
  progress: { type: Number, default: 0 },
  location: { type: String, required: true },
  image: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  created: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Campaign", CampaignSchema);


//(time 5.40)
// const mongoose = require("mongoose");

// const CampaignSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   location: { type: String, required: true },
//   image: { type: String, required: true },
//   created: { type: Date, default: Date.now },
//   progress: { type: Number, default: 0 },
//   raised: { type: Number, default: 0 },  // ✅ Set default
//   goal: { type: Number, required: true },
// });

// module.exports = mongoose.model("Campaign", CampaignSchema);



// const mongoose = require('mongoose');

// const  CampaignSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   goal: { type: Number, required: true },
//   location: { type: String, required: true },
//   image: { type: String, required: true },
//   progress: { type: Number, default: 0 },
//   raised: { type: Number, default: 0 },
//   created: { type: Date, default: Date.now },
//   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // ✅ Required field
//   endDate: { type: Date }, // Optional
//   category: { type: String }, // Optional (e.g., "Education", "Health")
//   donors: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Optional (tracks donors)
//   updates: [
//     {
//       date: { type: Date, default: Date.now },
//       message: { type: String }
//     }
//   ] // Optional (stores campaign updates)
// });
// module.exports = mongoose.model("Campaign", CampaignSchema);


