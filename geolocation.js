// Geolocation API
const express = require('express');
const router = express.Router();

// Mock geolocation data
router.get('/geolocation-data', (req, res) => {
  const data = [
    { id: 1, latitude: 37.7749, longitude: -122.4194, region: "San Francisco" },
    { id: 2, latitude: 34.0522, longitude: -118.2437, region: "Los Angeles" },
  ];
  res.json(data);
});

module.exports = router;