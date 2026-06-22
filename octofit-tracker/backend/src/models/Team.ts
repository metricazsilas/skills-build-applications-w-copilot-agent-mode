import { Schema, model } from 'mongoose';

const TeamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  totalPoints: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Team = model('Team', TeamSchema);
