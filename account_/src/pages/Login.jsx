import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../utils/auth'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    const res = loginUser({ email: email.trim(), password })
    if (!res.ok) return setError(res.error)
    onLogin(res.user)
    navigate('/account')
  }

  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: 480 }}>
      <h2 className="mb-3">Login</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </div>

        <button className="btn btn-primary">Sign in</button>
      </form>
    </div>
  )
}
