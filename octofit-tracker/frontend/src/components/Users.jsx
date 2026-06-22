import { useState, useEffect } from 'react'

function Users({ apiUrl }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(apiUrl)
        if (!response.ok) throw new Error('Failed to fetch users')
        const data = await response.json()
        setUsers(Array.isArray(data) ? data : [])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [apiUrl])

  if (loading) return <div className="loading">Loading users...</div>
  if (error) return <div className="error">Error: {error}</div>

  return (
    <div className="component">
      <h2>Users</h2>
      <ul className="list">
        {users.map((user) => (
          <li key={user._id} className="list-item">
            <strong>{user.name}</strong> ({user.email}) - Points: {user.points}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
