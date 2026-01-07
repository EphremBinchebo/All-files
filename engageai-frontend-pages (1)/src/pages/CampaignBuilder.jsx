import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function CampaignBuilder(){
  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');
  const [platform,setPlatform]=useState('INSTAGRAM');
  const [schedule,setSchedule]=useState('');
  const navigate = useNavigate();

  const handleSave = async () => {
    const res = await api.createCampaign({ title, content, platform, scheduledAt: schedule || null });
    alert('Saved id: ' + res.id);
    navigate('/dashboard');
  };

  return (
    <>
      <Navbar/>
      <main className="builder">
        <div className="card">
          <h2>Create Campaign</h2>
          <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
          <textarea placeholder="Content" value={content} onChange={e=>setContent(e.target.value)} />
          <div>
            <label><input type="radio" checked={platform==='INSTAGRAM'} onChange={()=>setPlatform('INSTAGRAM')} /> Instagram</label>
            <label style={{marginLeft:12}}><input type="radio" checked={platform==='TIKTOK'} onChange={()=>setPlatform('TIKTOK')} /> TikTok</label>
          </div>
          <input placeholder="Schedule ISO e.g. 2025-10-12T15:00:00" value={schedule} onChange={e=>setSchedule(e.target.value)} />
          <div style={{marginTop:12}}>
            <button className="btn btn-primary" onClick={handleSave}>Save Draft</button>
            <button className="btn" onClick={async ()=>{ const res=await api.createCampaign({title,content,platform}); const id=res.id; const p=await api.previewCampaign(id); alert(p); }}>Preview</button>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
