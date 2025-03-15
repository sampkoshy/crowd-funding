// const express = require("express");
// const bcrypt = require("bcrypt"); // Using bcryptjs instead of bcrypt for better compatibility
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// const Register = require("../models/register");

// dotenv.config(); // Load environment variables

// const router = express.Router();
// const ADMIN_EMAIL = "admin@gmail.com";
// const ADMIN_PASSWORD = "admin";
// const JWT_SECRET = process.env.JWT_SECRET; // Ensure .env contains JWT_SECRET

// // ✅ Register Route (POST)
// router.post("/register", async (req, res) => {
//     try {
//         const { name, email, phone, aadhar, password } = req.body;

//         // ✅ Check if all fields are provided
//         if (!name || !email || !phone || !aadhar || !password) {
//             return res.status(400).json({ message: "All fields are required" });
//         }

//         // ✅ Check if user already exists (by email or Aadhar)
//         const existingUser = await Register.findOne({ $or: [{ email }, { aadhar }] });
//         if (existingUser) {
//             return res.status(400).json({ message: "User already registered (Email or Aadhar exists)" });
//         }

//         // ✅ Hash password before saving
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // ✅ Save new user to database
//         const newUser = new Register({
//             name,
//             email,
//             phone,
//             aadhar,
//             password: hashedPassword
//         });

//         await newUser.save();

//         // ✅ Generate JWT Token after registration
//         const token = jwt.sign({ userId: newUser._id, email: newUser.email }, JWT_SECRET, { expiresIn: "1h" });

//         res.status(201).json({ message: "Registration successful", token, user: newUser });
//     } catch (error) {
//         console.error("❌ Error registering user:", error);
//         res.status(500).json({ message: "Internal server error", error: error.message });
//     }
// });
// //admin
// // ✅ Fix: Use `JWT_SECRET` instead of `SECRET_KEY`
// router.post("/admin/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
//             return res.status(401).json({ message: "Invalid admin credentials" });
//         }

//         // ✅ Use the correct secret key
//         if (!JWT_SECRET) {
//             console.error("⚠️ ERROR: Missing JWT_SECRET in .env file!");
//             return res.status(500).json({ message: "Server error: Missing JWT_SECRET" });
//         }

//         // ✅ Generate Admin Token
//         const token = jwt.sign({ role: "admin", email: ADMIN_EMAIL }, JWT_SECRET, { expiresIn: "1h" });

//         res.status(200).json({ message: "Admin login successful", token });
//     } catch (error) {
//         console.error("❌ Error logging in:", error);
//         res.status(500).json({ message: "Internal server error", error: error.message });
//     }
// });

// // ✅ Login Route (POST)
// router.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // ✅ Check if user exists
//         const user = await Register.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // ✅ Compare entered password with stored hashed password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: "Invalid credentials" });
//         }

//         // ✅ Ensure JWT_SECRET is available
//         if (!JWT_SECRET) {
//             console.error("⚠️ ERROR: Missing JWT_SECRET in .env file!");
//             return res.status(500).json({ message: "Server error: Missing JWT_SECRET" });
//         }

//         // ✅ Generate JWT Token
//         const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

//         res.status(200).json({ message: "Login successful", token, user });
//     } catch (error) {
//         console.error("❌ Error logging in:", error);
//         res.status(500).json({ message: "Internal server error", error: error.message });
//     }
// });

// module.exports = router;




// change because of dupicate number
const express = require("express");
const bcrypt = require("bcrypt"); // Using bcryptjs instead of bcrypt for better compatibility
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Register = require("../models/register");

dotenv.config(); // Load environment variables

const router = express.Router();
const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "admin";
const JWT_SECRET = process.env.JWT_SECRET; // Ensure .env contains JWT_SECRET

// ✅ Register Route (POST)
router.post("/register", async (req, res) => {
    try {
        const { name, email, phone, aadhar, password } = req.body;

        // ✅ Check if all fields are provided
        if (!name || !email || !phone || !aadhar || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // ✅ Check if user already exists (by email, Aadhar, or Phone)
        const existingUser = await Register.findOne({ $or: [{ email }, { aadhar }, { phone }] });
        if (existingUser) {
            return res.status(400).json({ message: "User already registered (Email, Aadhar, or Phone exists)" });
        }

        // ✅ Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ Save new user to database
        const newUser = new Register({
            name,
            email,
            phone,
            aadhar,
            password: hashedPassword
        });

        await newUser.save();

        // ✅ Generate JWT Token after registration
        const token = jwt.sign({ userId: newUser._id, email: newUser.email }, JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ message: "Registration successful", token, user: newUser });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "Phone number already registered. Use a different phone number." });
        }
        console.error("❌ Error registering user:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

// ✅ Admin Login Route
router.post("/admin/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
            return res.status(401).json({ message: "Invalid admin credentials" });
        }
        if (!JWT_SECRET) {
            console.error("⚠️ ERROR: Missing JWT_SECRET in .env file!");
            return res.status(500).json({ message: "Server error: Missing JWT_SECRET" });
        }
        const token = jwt.sign({ role: "admin", email: ADMIN_EMAIL }, JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ message: "Admin login successful", token });
    } catch (error) {
        console.error("❌ Error logging in:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

// ✅ User Login Route
router.post("/login", async (req, res) => {
    try {
       
        const { email, password, campaignId } = req.body;
        const user = await Register.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        if (!JWT_SECRET) {
            console.error("⚠️ ERROR: Missing JWT_SECRET in .env file!");
            return res.status(500).json({ message: "Server error: Missing JWT_SECRET" });
        }
        const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ message: "Login successful", token, user,campaignId });
    } catch (error) {
        console.error("❌ Error logging in:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

module.exports = router;


