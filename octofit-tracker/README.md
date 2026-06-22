# OctoFit Tracker - Multi-tier Application

A modern fitness tracking application built with a React frontend, Node.js/Express backend, and MongoDB database.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── App.jsx      # Main app component
│   │   └── main.jsx     # Entry point
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
└── backend/           # Node.js + Express + TypeScript
    ├── src/
    │   ├── config/      # Database configuration
    │   ├── models/      # Mongoose models
    │   ├── routes/      # API routes
    │   ├── scripts/     # Seed script
    │   └── server.ts    # Main server
    ├── package.json
    └── tsconfig.json
```

## Tech Stack

- **Frontend**: React 19, Vite, React Router
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB
- **Port Configuration**:
  - Frontend: 5173
  - Backend: 8000
  - MongoDB: 27017
  - Database: `octofit_db`

## API Endpoints

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `GET /api/teams` - Get all teams
- `GET /api/teams/:id` - Get team by ID
- `POST /api/teams` - Create new team
- `GET /api/activities` - Get all activities
- `GET /api/activities/:id` - Get activity by ID
- `POST /api/activities` - Create new activity
- `GET /api/workouts` - Get all workouts
- `GET /api/workouts/:id` - Get workout by ID
- `POST /api/workouts` - Create new workout
- `GET /api/leaderboard` - Get leaderboard
- `GET /api/leaderboard/:userId` - Get user leaderboard entry

## Setup Instructions

### Prerequisites

- Node.js (v14.18.0+)
- MongoDB (running locally or connection string)
- npm or yarn

### Backend Setup

```bash
cd octofit-tracker/backend

# Install dependencies
npm install

# Run development server
npm run dev

# Build TypeScript
npm run build

# Seed database with test data
npm run seed
```

### Frontend Setup

```bash
cd octofit-tracker/frontend

# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

### Frontend (.env.local)
```
VITE_CODESPACE_NAME=your-codespace-name
```

For GitHub Codespaces, the API will automatically use: `https://{CODESPACE_NAME}-8000.app.github.dev/api`

For local development, it will use: `http://localhost:8000/api`

### Backend
```
MONGODB_URI=mongodb://localhost:27017/octofit_db
PORT=8000
```

## Running the Application

### Option 1: Local Development

**Terminal 1 - Backend:**
```bash
cd octofit-tracker/backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd octofit-tracker/frontend
npm run dev
```

**Terminal 3 - MongoDB (if not running as a service):**
```bash
mongod
```

Then:
1. Navigate to `http://localhost:5173` in your browser
2. Seed database with test data: `npm run seed` (from backend directory)

### Option 2: Production Build

```bash
# Backend
cd octofit-tracker/backend
npm run build
npm start

# Frontend
cd octofit-tracker/frontend
npm run build
npm run preview
```

## Features

- User profile management
- Activity tracking and logging
- Team creation and management
- Competitive leaderboard
- Personalized workout suggestions
- Achievement badges

## Development Workflow

1. Start MongoDB
2. Start backend server (dev or build+start)
3. Seed database with test data
4. Start frontend development server
5. Open browser to http://localhost:5173

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod` or service `mongod` start
- Check connection string in environment variables

### Port Already in Use
- Backend (8000): `lsof -ti:8000 | xargs kill`
- Frontend (5173): `lsof -ti:5173 | xargs kill`

### npm install Issues
- Use `--legacy-peer-deps` flag if you encounter peer dependency conflicts
- Clear npm cache: `npm cache clean --force`

## Notes

- Node.js version may have compatibility issues with very recent versions of dependencies
- Use `--legacy-peer-deps` when installing packages if needed
- The application uses Codespaces detection for API URL configuration
