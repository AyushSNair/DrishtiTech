const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  resumePath: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
