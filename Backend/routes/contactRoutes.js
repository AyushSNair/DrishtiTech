const express = require('express');
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact'); // if you're using MongoDB to store messages
const router = express.Router();

// POST /api/contact - Handling the contact form submission
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Optionally store the form data in MongoDB
  try {
    const newMessage = new Contact({
      name,
      email,
      message,
    });
    await newMessage.save();

    // Sending an email to the business using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or any email service you're using
      auth: {
        user: 'melissasequeira572@gmail.com',
        pass: 'dddn ungd jqzc egit',
      },
    });

    const mailOptions = {
      from: email,
      to: 'melissasequeira572@gmail.com', // The recipient email address
      subject: 'New Contact Form Submission',
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.status(500).json({ error: 'Error sending email.', details: err });
      }
      res.status(200).json({ message: 'Message sent successfully!' });
    });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong.', details: err.message });
  }
});

module.exports = router;
