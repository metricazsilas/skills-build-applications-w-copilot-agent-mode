import { Schema, model } from 'mongoose';

const ActivitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  pointsValue: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Activity = model('Activity', ActivitySchema);
