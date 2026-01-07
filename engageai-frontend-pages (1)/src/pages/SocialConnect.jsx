import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as api from '../services/api';

export default function SocialConnect(){
  const [status, setStatus] = useState({instagram:false,tiktok:false});
  const userId = localStorage.getItem('userId') || '1';

  const connect = async (platform) => {
    try {
      const res = await api.connectSocial(userId, platform);
      alert('Connected: ' + JSON.stringify(res));
      setStatus(prev => ({...prev, [platform]: true}));
    } catch(err){
      alert('Connect failed');
    }
  };

  return (
    <>
      <Navbar/>
      <main className="card" style={{margin:20}}>
        <h2>Connect Social Accounts</h2>
        <div style={{display:'flex',gap:12}}>
          <div style={{flex:1}}>
            <h4>Instagram</h4>
            <p>Connect via Instagram Graph API (mock)</p>
            <button className="btn btn-primary" onClick={()=>connect('instagram')}>Connect Instagram</button>
            <div>{status.instagram ? '✅ Connected' : '🔴 Not connected'}</div>
          </div>
          <div style={{flex:1}}>
            <h4>TikTok</h4>
            <p>Connect via TikTok OAuth (mock)</p>
            <button className="btn btn-primary" onClick={()=>connect('tiktok')}>Connect TikTok</button>
            <div>{status.tiktok ? '✅ Connected' : '🔴 Not connected'}</div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
