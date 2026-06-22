import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Users from './components/Users'
import Teams from './components/Teams'
import Activities from './components/Activities'
import Workouts from './components/Workouts'
import Leaderboard from './components/Leaderboard'
import './App.css'

function App() {
  const [apiBaseUrl, setApiBaseUrl] = useState('')

  useEffect(() => {
    // Build API base URL based on environment
    const codespaceNameEnv = import.meta.env.VITE_CODESPACE_NAME
    
    if (codespaceNameEnv) {
      setApiBaseUrl(`https://${codespaceNameEnv}-8000.app.github.dev/api`)
    } else {
      // Fallback to localhost
      setApiBaseUrl('http://localhost:8000/api')
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1>OctoFit Tracker</h1>
          <ul className="nav-links">
            <li><Link to="/">Users</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/activities">Activities</Link></li>
            <li><Link to="/workouts">Workouts</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
          </ul>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<Users apiUrl={`${apiBaseUrl}/users`} />} />
            <Route path="/teams" element={<Teams apiUrl={`${apiBaseUrl}/teams`} />} />
            <Route path="/activities" element={<Activities apiUrl={`${apiBaseUrl}/activities`} />} />
            <Route path="/workouts" element={<Workouts apiUrl={`${apiBaseUrl}/workouts`} />} />
            <Route path="/leaderboard" element={<Leaderboard apiUrl={`${apiBaseUrl}/leaderboard`} />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
