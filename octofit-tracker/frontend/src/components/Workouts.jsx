import { useState, useEffect } from 'react'

function Workouts({ apiUrl }) {
  const [workouts, setWorkouts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(apiUrl)
        if (!response.ok) throw new Error('Failed to fetch workouts')
        const data = await response.json()
        setWorkouts(Array.isArray(data) ? data : [])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchWorkouts()
  }, [apiUrl])

  if (loading) return <div className="loading">Loading workouts...</div>
  if (error) return <div className="error">Error: {error}</div>

  return (
    <div className="component">
      <h2>Workouts</h2>
      <ul className="list">
        {workouts.map((workout) => (
          <li key={workout._id} className="list-item">
            <strong>{workout.activity}</strong> - Duration: {workout.duration} mins - Points: {workout.points}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Workouts
