const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  participants: [{type: Schema.Types.ObjectId, ref: "User"}],
  duration: {type: Number, required: true},
  maxParticipants: {type: Number, required: true},
  // chat: []
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;