import { Schema, model } from 'mongoose';

const LeaderboardSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  rank: {
    type: Number,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Leaderboard = model('Leaderboard', LeaderboardSchema);
