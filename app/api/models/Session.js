const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  topic: String,
  startedAt: { type: Date, default: Date.now },
  endedAt: Date,
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' }]
});

module.exports = mongoose.model('Session', sessionSchema);
