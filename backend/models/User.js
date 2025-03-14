// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   selectedCampaign: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign", default: null }, // ✅ Store Selected Campaign
// }, { timestamps: true });

// module.exports = mongoose.model("User", UserSchema);




// time 11.20

const mongoose = require("mongoose");
const UserSchema= new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  selectedCampaign: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign" }, // ✅ Reference to Campaign model
  donations: [
    {
      campaignId: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign" },
      amount: { type: Number, required: true },
    },
  ],
});
module.exports = mongoose.model("User", UserSchema);