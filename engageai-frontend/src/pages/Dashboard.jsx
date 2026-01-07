import { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

export default function Dashboard(){
  const [connected, setConnected] = useState({instagram:false,tiktok:false});
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    // In a real app fetch connection status from backend
  }, []);

  const connect = async (platform) => {
    const res = await api.get(`/auth/${platform}/login`);
    alert('Open this URL in a browser to perform consent: ' + res.data.auth_url + '\nAfter consent, call callback with ?userId=' + userId);
  };

  return (
    <div style={{padding:20}}>
      <h1>Welcome to EngageAI</h1>
      <div style={{border:'1px solid #ddd',padding:12,marginTop:12}}>
        <h3>Social Connections</h3>
        <div style={{display:'flex',gap:24}}>
          <div>
            <div>Instagram: {connected.instagram ? '✅ Connected' : '🔴 Not connected'}</div>
            <button onClick={()=>connect('instagram')}>Connect Instagram</button>
          </div>
          <div>
            <div>TikTok: {connected.tiktok ? '✅ Connected' : '🔴 Not connected'}</div>
            <button onClick={()=>connect('tiktok')}>Connect TikTok</button>
          </div>
        </div>
      </div>

      <div style={{marginTop:12}}>
        <Link to="/builder">Create Campaign</Link>
      </div>
    </div>
  );
}
