import React, { useState, useEffect } from 'react'
import { updateUser, logout } from '../utils/auth'
import { useNavigate } from 'react-router-dom'

export default function Account({ user, onUserChange }) {
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    setName(user?.name || '')
    setEmail(user?.email || '')
  }, [user])

  if (!user) return <p>Please login to view your account.</p>

  function handleSave(e) {
    e.preventDefault()
    const res = updateUser({ id: user.id, name: name.trim(), email: email.trim() })
    if (!res.ok) return setMessage({ type: 'error', text: res.error })
    onUserChange(res.user)
    setMessage({ type: 'success', text: 'Profile updated' })
  }

  function handleLogout() {
    logout()
    onUserChange(null)
    navigate('/login')
  }

  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: 640 }}>
      <h2 className="mb-3">Your account</h2>

      {message && (
        <div className={`alert ${message.type === 'error' ? 'alert-danger' : 'alert-success'}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSave}>
        <div className="mb-3">
          <label className="form-label">Full name</label>
          <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Email (you can change it)</label>
          <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-primary">Save changes</button>
          <button type="button" className="btn btn-outline-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </form>
    </div>
  )
}
