import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage(){
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{ api.listCampaigns().then(setCampaigns).catch(()=>setCampaigns([])); }, []);

  return (
    <>
      <Navbar/>
      <main className="dashboard">
        <div className="dashboard-left">
          <h2>Your Campaigns</h2>
          <button className="btn btn-primary" onClick={()=>navigate('/builder')}>Create Campaign</button>
          <ul className="campaign-list">
            {campaigns.length===0 && <li className="muted">No campaigns yet</li>}
            {campaigns.map(c=>(
              <li key={c.id} className="campaign-item">
                <div><strong>{c.title}</strong> <span className="muted">({c.status})</span></div>
                <div className="campaign-actions">
                  <button className="link" onClick={async ()=>{ const p = await api.previewCampaign(c.id); alert(p); }}>Preview</button>
                  <button className="link" onClick={async ()=>{ const r = await api.postNow(c.id); alert(r.message); setCampaigns(await api.listCampaigns()); }}>Post Now</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard-right">
          <h3>Analytics</h3>
          <div className="card">Placeholder analytics graphs</div>
          <h3 style={{marginTop:20}}>Social Connections</h3>
          <div className="card">
            <div>Instagram: <strong>Not connected</strong></div>
            <div>TikTok: <strong>Not connected</strong></div>
            <div style={{marginTop:8}}>
              <a href="/connect" className="link">Connect accounts</a>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
