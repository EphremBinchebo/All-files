import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function CampaignBuilder(){
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [platform, setPlatform] = useState('INSTAGRAM');
  const [schedule, setSchedule] = useState('');
  const navigate = useNavigate();

  const createDraft = async () => {
    const payload = { title, content, platform, scheduledAt: schedule ? schedule : null };
    const res = await api.post('/campaigns', payload);
    alert('Saved draft id: ' + res.data.id);
  };

  const preview = async () => {
    const res = await api.post('/campaigns', { title, content, platform });
    const id = res.data.id;
    const p = await api.post('/campaigns/preview/' + id);
    alert(p.data);
  };

  const postNow = async () => {
    const res = await api.post('/campaigns', { title, content, platform });
    const id = res.data.id;
    const p = await api.post('/campaigns/post/' + id);
    alert(p.data);
    navigate('/dashboard');
  };

  return (
    <div style={{padding:20}}>
      <h2>Create Campaign</h2>
      <input placeholder="Title" onChange={(e)=>setTitle(e.target.value)} />
      <textarea placeholder="Content" onChange={(e)=>setContent(e.target.value)} style={{width:'100%',height:120}} />
      <div style={{marginTop:8}}>
        <label><input type="radio" checked={platform==='INSTAGRAM'} onChange={()=>setPlatform('INSTAGRAM')} /> Instagram</label>
        <label style={{marginLeft:8}}><input type="radio" checked={platform==='TIKTOK'} onChange={()=>setPlatform('TIKTOK')} /> TikTok</label>
      </div>
      <div style={{marginTop:8}}>
        <input placeholder="Schedule (ISO 8601) e.g. 2025-10-12T15:00:00" onChange={(e)=>setSchedule(e.target.value)} />
      </div>
      <div style={{marginTop:8}}>
        <button onClick={createDraft}>Save Draft</button>
        <button onClick={preview} style={{marginLeft:8}}>Preview</button>
        <button onClick={postNow} style={{marginLeft:8}}>Post Now</button>
      </div>
    </div>
  );
}
