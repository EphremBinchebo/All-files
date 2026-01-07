import React, { useEffect, useState } from 'react'
import { listCampaigns } from '../services/api'

export default function DashboardPage(){
  const [campaigns, setCampaigns] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    async function load() {
      setLoading(true)
      try {
        const data = await listCampaigns()
        if (mounted) setCampaigns(data)
      } catch (err) {
        console.error('Failed to fetch campaigns', err)
        if (mounted) setCampaigns([])
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => { mounted = false }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    window.location.href = '/login'
  }

  return (
    <div className="page-root">
      <header className="topbar">
        <div className="brand">EngageAI</div>
        <div>
          <button onClick={handleLogout} className="btn-ghost">Logout</button>
        </div>
      </header>

      <main className="page-inner">
        <h1>Your Campaigns</h1>

        {loading && <div className="muted">Loading campaigns...</div>}
        {!loading && campaigns && campaigns.length === 0 && <div className="muted">No campaigns found</div>}

        <ul className="campaign-list">
          {campaigns && campaigns.map(c => (
            <li key={c.id} className="campaign-item">
              <div>
                <div className="campaign-title">{c.title}</div>
                <div className="muted">{c.platform} • {c.status || 'N/A'}</div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
