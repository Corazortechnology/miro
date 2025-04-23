// const mongoose = require('mongoose');

// const attendeeSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   joinTime: { type: Date, default: Date.now },
//   leaveTime: Date,
//   session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
//   socketId: String // for tracking
// });

// module.exports = mongoose.model('Attendee', attendeeSchema);


const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
    roomId: String,
    peerName: String,
    peerId: String,
    joinTime: Date,
    leaveTime: Date
});

module.exports = mongoose.model('Attendee', attendeeSchema);
