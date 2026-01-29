// Simple auth utilities backed by localStorage.
// This is intentionally minimal for the exercise — no server, no encryption.

const USERS_KEY = 'ri_users_v1'
const SESSION_KEY = 'ri_session_v1'

function _readUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY) || '[]'
    return JSON.parse(raw)
  } catch (e) {
    return []
  }
}

function _writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function registerUser({ name, email, password }) {
  const users = _readUsers()
  if (users.some((u) => u.email === email)) {
    return { ok: false, error: 'Email already registered' }
  }

  const newUser = { id: Date.now().toString(), name, email, password }
  users.push(newUser)
  _writeUsers(users)
  localStorage.setItem(SESSION_KEY, JSON.stringify(newUser))
  return { ok: true, user: { ...newUser, password: undefined } }
}

export function loginUser({ email, password }) {
  const users = _readUsers()
  const found = users.find((u) => u.email === email && u.password === password)
  if (!found) return { ok: false, error: 'Invalid credentials' }
  localStorage.setItem(SESSION_KEY, JSON.stringify(found))
  return { ok: true, user: { ...found, password: undefined } }
}

export function logout() {
  localStorage.removeItem(SESSION_KEY)
}

export function getCurrentUser() {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const u = JSON.parse(raw)
    // sanitize
    delete u.password
    return u
  } catch (e) {
    return null
  }
}

export function updateUser(updated) {
  const users = _readUsers()
  const idx = users.findIndex((u) => u.id === updated.id)
  if (idx === -1) return { ok: false, error: 'User not found' }
  // keep password if not provided
  users[idx] = { ...users[idx], ...updated }
  _writeUsers(users)
  localStorage.setItem(SESSION_KEY, JSON.stringify(users[idx]))
  const safe = { ...users[idx] }
  delete safe.password
  return { ok: true, user: safe }
}

export function listUsers() {
  return _readUsers().map((u) => ({ ...u, password: undefined }))
}
