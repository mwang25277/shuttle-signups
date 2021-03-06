const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var shuttleSchema = new Schema({
      isActive: Boolean,
      origin: Array,
      destination: Array,
      departureDate: Date,
      maxCapacity: Number,
      vacancies: Number,
      guestsAllowed: Number,
      riders: Array,
      waitlist: Array,
});

module.exports = mongoose.model('Shuttle', shuttleSchema);