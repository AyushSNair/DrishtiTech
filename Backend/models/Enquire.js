const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a new schema for the enquiry form data
const EnquireSchema = new Schema({
  email: { type: String, required: true, unique: true, },
  password: { type: String, required: true },
  club: { type: String, required: true },
  country: { type: String, required: true },
});

// Create the Enquire model using the schema
const Enquire = mongoose.model('Enquire', EnquireSchema);

module.exports = Enquire;
