// Authentication API
const express = require('express');
const router = express.Router();

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Validate user credentials (replace with DB logic)
  if (email === "test@example.com" && password === "password123") {
    res.json({ message: "Login successful", token: "sample-jwt-token" });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

module.exports = router;