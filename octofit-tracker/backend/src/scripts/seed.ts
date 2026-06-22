import mongoose from 'mongoose';
import { User } from '../models/User';
import { Team } from '../models/Team';
import { Activity } from '../models/Activity';
import { Workout } from '../models/Workout';
import { Leaderboard } from '../models/Leaderboard';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/octofit_db');
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await Workout.deleteMany({});
    await Leaderboard.deleteMany({});

    // Create users
    const users = await User.insertMany([
      { name: 'Alice Johnson', email: 'alice@example.com', points: 1500 },
      { name: 'Bob Smith', email: 'bob@example.com', points: 1200 },
      { name: 'Charlie Brown', email: 'charlie@example.com', points: 1800 },
      { name: 'Diana Prince', email: 'diana@example.com', points: 950 },
      { name: 'Eve Wilson', email: 'eve@example.com', points: 2100 },
    ]);

    console.log('✓ Created users');

    // Create teams
    const teams = await Team.insertMany([
      {
        name: 'Morning Warriors',
        description: 'Early birds who get fit before work',
        members: [users[0]._id, users[1]._id],
        totalPoints: 2700,
      },
      {
        name: 'Evening Runners',
        description: 'Athletes who train after hours',
        members: [users[2]._id, users[3]._id, users[4]._id],
        totalPoints: 4850,
      },
    ]);

    console.log('✓ Created teams');

    // Create activities
    const activities = await Activity.insertMany([
      { name: 'Running', description: '30-minute run', pointsValue: 100 },
      { name: 'Walking', description: '45-minute walk', pointsValue: 50 },
      { name: 'Strength Training', description: '1-hour gym session', pointsValue: 150 },
      { name: 'Yoga', description: '1-hour yoga class', pointsValue: 75 },
      { name: 'Swimming', description: '30-minute swim', pointsValue: 120 },
    ]);

    console.log('✓ Created activities');

    // Create workouts
    const workouts = await Workout.insertMany([
      { userId: users[0]._id, activity: 'Running', duration: 30, points: 100, date: new Date('2024-06-20') },
      { userId: users[0]._id, activity: 'Strength Training', duration: 60, points: 150, date: new Date('2024-06-19') },
      { userId: users[1]._id, activity: 'Walking', duration: 45, points: 50, date: new Date('2024-06-20') },
      { userId: users[2]._id, activity: 'Running', duration: 30, points: 100, date: new Date('2024-06-20') },
      { userId: users[2]._id, activity: 'Yoga', duration: 60, points: 75, date: new Date('2024-06-19') },
      { userId: users[3]._id, activity: 'Swimming', duration: 30, points: 120, date: new Date('2024-06-18') },
      { userId: users[4]._id, activity: 'Strength Training', duration: 60, points: 150, date: new Date('2024-06-20') },
      { userId: users[4]._id, activity: 'Running', duration: 30, points: 100, date: new Date('2024-06-19') },
    ]);

    console.log('✓ Created workouts');

    // Create leaderboard entries
    const leaderboardEntries = await Leaderboard.insertMany([
      { userId: users[4]._id, userName: 'Eve Wilson', points: 2100, rank: 1 },
      { userId: users[2]._id, userName: 'Charlie Brown', points: 1800, rank: 2 },
      { userId: users[0]._id, userName: 'Alice Johnson', points: 1500, rank: 3 },
      { userId: users[1]._id, userName: 'Bob Smith', points: 1200, rank: 4 },
      { userId: users[3]._id, userName: 'Diana Prince', points: 950, rank: 5 },
    ]);

    console.log('✓ Created leaderboard entries');

    console.log('\n✅ Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
