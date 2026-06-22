import { useState, useEffect } from 'react'

function Teams({ apiUrl }) {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(apiUrl)
        if (!response.ok) throw new Error('Failed to fetch teams')
        const data = await response.json()
        setTeams(Array.isArray(data) ? data : [])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTeams()
  }, [apiUrl])

  if (loading) return <div className="loading">Loading teams...</div>
  if (error) return <div className="error">Error: {error}</div>

  return (
    <div className="component">
      <h2>Teams</h2>
      <ul className="list">
        {teams.map((team) => (
          <li key={team._id} className="list-item">
            <strong>{team.name}</strong> - {team.description} - Total Points: {team.totalPoints}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Teams
