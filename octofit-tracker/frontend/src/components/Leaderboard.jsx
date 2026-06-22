import { useState, useEffect } from 'react'

function Leaderboard({ apiUrl }) {
  const [leaderboard, setLeaderboard] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(apiUrl)
        if (!response.ok) throw new Error('Failed to fetch leaderboard')
        const data = await response.json()
        setLeaderboard(Array.isArray(data) ? data : [])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchLeaderboard()
  }, [apiUrl])

  if (loading) return <div className="loading">Loading leaderboard...</div>
  if (error) return <div className="error">Error: {error}</div>

  return (
    <div className="component">
      <h2>Leaderboard</h2>
      <ul className="list">
        {leaderboard.map((entry, index) => (
          <li key={entry._id} className="list-item">
            <strong>#{index + 1}</strong> - {entry.userName} - Points: {entry.points}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Leaderboard
