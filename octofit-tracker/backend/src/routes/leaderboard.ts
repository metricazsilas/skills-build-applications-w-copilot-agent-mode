import { Router } from 'express';
import { Leaderboard } from '../models/Leaderboard';

const router = Router();

// GET leaderboard
router.get('/', async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find()
      .sort({ points: -1, updatedAt: -1 })
      .populate('userId');
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching leaderboard', error });
  }
});

// GET leaderboard by user
router.get('/:userId', async (req, res) => {
  try {
    const entry = await Leaderboard.findOne({ userId: req.params.userId }).populate('userId');
    if (!entry) {
      return res.status(404).json({ message: 'Leaderboard entry not found' });
    }
    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching leaderboard entry', error });
  }
});

export default router;
