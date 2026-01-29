import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Login from './pages/Login'
import Register from './pages/Register'
import Account from './pages/Account'
import NavBar from './components/NavBar'
import { getCurrentUser } from './utils/auth'

// Main application. Keeps simple auth state in memory and falls back to localStorage.
function App() {
  const [currentUser, setCurrentUser] = useState(null)

  // On mount, load any existing user session from storage.
  useEffect(() => {
    const user = getCurrentUser()
    if (user) setCurrentUser(user)
  }, [])

  return (
    <BrowserRouter>
      <div className="app-root container py-4">
        <NavBar user={currentUser} onUserChange={setCurrentUser} />

        <main className="mt-4">
          <Routes>
            <Route
              path="/"
              element={currentUser ? <Navigate to="/account" /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={<Login onLogin={setCurrentUser} />}
            />
            <Route
              path="/register"
              element={<Register onRegister={setCurrentUser} />}
            />
            <Route
              path="/account"
              element={<Account user={currentUser} onUserChange={setCurrentUser} />}
            />
            <Route path="*" element={<p>Page not found</p>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
