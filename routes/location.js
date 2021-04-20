// Import Dependencies
const express = require('express');
const locController = require("../controllers/location");

// Define Expree Router
const router = express.Router();

// Store Location 
router.post("/loc", locController.postLoc );

// Fetch Locations
router.get("/loc", locController.getLoc );

// Find Near Locations
router.get('/userloc', locController.findLoc);

// export router
module.exports = router;