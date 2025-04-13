const express = require('express');
const router = express.Router();
const multer = require('multer');
const Application = require('../models/Application'); // The Application model

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Make the filename unique
  }
});
const upload = multer({ storage: storage });

// POST /api/apply - Handle application form submissions
router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const { name, email } = req.body;
    const resumePath = req.file.path; // The file path of the uploaded resume

    const newApp = new Application({
      name,
      email,
      resumePath
    });

    await newApp.save();
    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong on the server.', details: err.message });
  }
});

module.exports = router;
