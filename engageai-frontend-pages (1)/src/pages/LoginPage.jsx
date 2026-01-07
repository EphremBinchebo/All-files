import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LoginPage(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.login({ email, password });
      localStorage.setItem('token', res.token);
      localStorage.setItem('userId', res.id);
      navigate('/dashboard');
    } catch(err){
      alert(err.message || 'Login failed');
    }
  };

  return (
    <>
      <Navbar/>
      <main className="auth-page">
        <form className="card" onSubmit={handleLogin}>
          <h2>Welcome back</h2>
          <input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
          <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
          <button className="btn btn-primary" type="submit">Login</button>
        </form>
      </main>
      <Footer/>
    </>
  );
}
