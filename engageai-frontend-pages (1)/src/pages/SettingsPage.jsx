import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as api from '../services/api';

export default function SettingsPage(){
  const [user,setUser]=useState(null);
  const userId = localStorage.getItem('userId');
  useEffect(()=>{ if (userId) api.getUser(userId).then(setUser).catch(()=>{}); }, []);
  return (
    <>
      <Navbar/>
      <main className="card" style={{margin:20}}>
        <h2>Account Settings</h2>
        {user ? (
          <div>
            <div><strong>Name:</strong> {user.name}</div>
            <div><strong>Email:</strong> {user.email}</div>
            <div><strong>Instagram Token:</strong> {user.instagramToken ? 'Linked' : 'Not linked'}</div>
            <div><strong>TikTok Token:</strong> {user.tiktokToken ? 'Linked' : 'Not linked'}</div>
          </div>
        ) : <div className="muted">Login to see settings</div>}
      </main>
      <Footer/>
    </>
  );
}
