const express = require("express");

const router = express.Router();

const LeadsController = require("../Controllers/leads");

// POST API to create a new lead in the system.
router.post("/createLead", LeadsController.createLead);


module.exports = router;