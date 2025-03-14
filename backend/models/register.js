// const mongoose = require("mongoose");

// const registerSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   phone: { type: String, required: true, unique: true },
//   aadhar: { type: String, required: true, unique: true },
//   password: { type: String, required: true, minlength: 6 },
//   donations: [
//     {
//       campaignId: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign" },
//       amount: { type: Number, required: true },
//       donatedAt: { type: Date, default: Date.now }
//     }
//   ]
// }, { timestamps: true });

// const Register = mongoose.model("Register", registerSchema);
// module.exports = Register;


const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },  // ✅ Unique phone number
    aadhar: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model("Register", registerSchema);
