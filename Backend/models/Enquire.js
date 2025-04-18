const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

// Create a new schema for the enquiry form data
const EnquireSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  club: { type: String, required: true },
  country: { type: String, required: true },
});

// Hash the password before saving
EnquireSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Create the Enquire model using the schema
const Enquire = mongoose.model('Enquire', EnquireSchema);

module.exports = Enquire;
