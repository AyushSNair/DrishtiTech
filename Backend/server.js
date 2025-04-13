const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const applicationRoutes = require('./routes/applicationRoutes');
const contactRoutes = require('./routes/contactRoutes'); 
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.use('/api/apply', applicationRoutes);
app.use('/api/contact', contactRoutes);
// Connect to MongoDB (replace with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/jobApplications', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
