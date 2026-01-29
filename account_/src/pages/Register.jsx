import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../utils/auth'

export default function Register({ onRegister }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    const res = registerUser({ name: name.trim(), email: email.trim(), password })
    if (!res.ok) return setError(res.error)
    onRegister(res.user)
    navigate('/account')
  }

  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: 520 }}>
      <h2 className="mb-3">Create an account</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full name</label>
          <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
        </div>

        <button className="btn btn-success">Register</button>
      </form>
    </div>
  )
}
