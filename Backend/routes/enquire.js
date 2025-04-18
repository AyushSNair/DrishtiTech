const express = require('express');
const router = express.Router();
const Enquire = require('../models/Enquire'); // Import your Enquire model

// POST route to handle form data submission
router.post('/submit', async (req, res) => {
  try {
    // Create a new enquiry entry using the Enquire model
    const newEnquire = new Enquire({
      email: req.body.email,
      password: req.body.password,
      club: req.body.club,
      country: req.body.country,
    });

    // Save the new entry to MongoDB
    await newEnquire.save();

    // Send a response back to the frontend
    res.status(201).json({
      message: 'Enquiry submitted successfully!',
      data: newEnquire,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error submitting enquiry',
      error: error.message,
    });
  }
});

module.exports = router;
