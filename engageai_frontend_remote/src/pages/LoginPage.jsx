import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/api'

export default function LoginPage(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await login({ email, password })
      if (res?.token) {
        localStorage.setItem('token', res.token)
        if (res.id) localStorage.setItem('userId', res.id)
        navigate('/')
      } else {
        alert('Login succeeded but token not received. Check backend response.')
      }
    } catch (err) {
      console.error(err)
      alert((err.response && err.response.data) || err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-root">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Sign in to EngageAI</h2>
        <input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
        <button className="btn-primary" type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</button>
      </form>
    </div>
  )
}
