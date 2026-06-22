import { useState, useEffect } from 'react'

function Activities({ apiUrl }) {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(apiUrl)
        if (!response.ok) throw new Error('Failed to fetch activities')
        const data = await response.json()
        setActivities(Array.isArray(data) ? data : [])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchActivities()
  }, [apiUrl])

  if (loading) return <div className="loading">Loading activities...</div>
  if (error) return <div className="error">Error: {error}</div>

  return (
    <div className="component">
      <h2>Activities</h2>
      <ul className="list">
        {activities.map((activity) => (
          <li key={activity._id} className="list-item">
            <strong>{activity.name}</strong> - {activity.description} - Points: {activity.pointsValue}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Activities
