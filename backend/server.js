// require("dotenv").config(); // Load environment variables
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require("cors");
// const registerRoutes = require('./routes/registerRoutes');
// // const campaignRoutes = require("./routes/campaignRoutes"); // Uncomment if needed

// const app = express();
// const port = process.env.PORT || 3000; // Use PORT from .env

// // Middleware
// app.use(express.json());
// app.use(cors());

// // ✅ MongoDB Connection (Use .env for security)

// mongoose
// .connect(process.env.MONGO_URI)
// .then(() => console.log("✅ MongoDB connected successfully"))
// .catch((error) => console.error("❌ MongoDB connection error:", error));

// // ✅ Test Route
// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

// // ✅ Routes
// // app.use('/api/campaigns', campaignRoutes); // Uncomment if needed
// app.use('/api/register', registerRoutes);

// // ✅ Global Error Handler
// app.use((err, req, res, next) => {
//     console.error("Global error handler:", err);
//     res.status(500).json({ error: "An unexpected error occurred" });
// });

// // ✅ Start the Express Server
// app.listen(port, () => {
//     console.log(`🚀 Server is running on port ${port}`);
// });




const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const campaignRoutes = require('./routes/campaignRoutes');
const userRoutes = require("./routes/userRoutes"); // ✅ Import userRoutes
const contactRoutes = require("./routes/contactRoutes");
const registerRoutes = require('./routes/registerRoutes');
const donationRoutes = require('./routes/donationRoutes'); // ✅ Import donation routes

const app = express();
const port = 4000;

// ✅ Middleware
app.use(express.json());  
app.use(cors());

// ✅ Routes
app.post("/api/users/selectCampaign", (req, res) => {
    console.log("Received request body:", req.body); // ✅ Log request body
    res.send("Received request"); // ✅ Temporary response
  });


app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/users", userRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/donations", donationRoutes);

// ✅ MongoDB Connection
mongoose.connect('mongodb://localhost:27017/campaignDB')
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch((error) => console.error("❌ MongoDB connection error:", error));

app.listen(port, () => console.log(`🚀 Server is running on port ${port}`));
