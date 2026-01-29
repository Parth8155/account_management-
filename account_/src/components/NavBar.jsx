import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../utils/auth'

export default function NavBar({ user, onUserChange }) {
  const nav = useNavigate()

  function handleLogout() {
    logout()
    onUserChange(null)
    nav('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          React Accounts
        </Link>

        <div className="navbar-collapse">
          <ul className="navbar-nav ms-auto" style={{ listStyle: 'none' }}>
            {!user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}

            {user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/account">
                    {user.name || user.email}
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-sm btn-outline-secondary" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
