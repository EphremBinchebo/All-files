import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Dashboard(){
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    api.get('/campaigns').then(res => setCampaigns(res.data)).catch(()=>setCampaigns([]));
  }, []);
  return (
    <div style={{padding:16}}>
      <h1>Dashboard</h1>
      <ul>
        {campaigns.map(c => <li key={c.id}>{c.title}</li>)}
      </ul>
    </div>
  );
}
