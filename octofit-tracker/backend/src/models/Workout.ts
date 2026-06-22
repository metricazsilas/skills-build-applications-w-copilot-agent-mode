import { Schema, model } from 'mongoose';

const WorkoutSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Workout = model('Workout', WorkoutSchema);
