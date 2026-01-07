import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar(){
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  return (
    <header className="nav-bar">
      <div className="nav-left" onClick={()=>navigate('/')}>
        <div className="logo-circle">EA</div>
        <span className="nav-title">EngageAI</span>
      </div>
      <nav className="nav-right">
        <button className="link" onClick={()=>navigate('/about')}>About</button>
        {token ? (
          <>
            <button className="link" onClick={()=>navigate('/dashboard')}>Dashboard</button>
            <button className="link" onClick={()=>{
              localStorage.removeItem('token'); localStorage.removeItem('userId'); navigate('/');}}>Logout</button>
          </>
        ) : (
          <>
            <button className="link" onClick={()=>navigate('/login')}>Login</button>
            <button className="btn" onClick={()=>navigate('/register')}>Get Started</button>
          </>
        )}
      </nav>
    </header>
  );
}
