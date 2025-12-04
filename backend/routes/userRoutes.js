// backend/routes/userRoutes.js
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// ADD THIS LINE TO SEE RAW DATA
router.post('/register', async (req, res) => {
  console.log("Received data:", req.body); // ← THIS WILL SHOW YOU EXACTLY WHAT'S COMING

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Create new user
    const user = await User.create(req.body);
    console.log("User saved successfully:", user); // ← CONFIRMATION

    res.status(201).json({
      message: "Registration successful!",
      user: {
        name: user.name,
        email: user.email,
        plan: user.plan
      }
    });

  } catch (error) {
    console.error("Error saving user:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;