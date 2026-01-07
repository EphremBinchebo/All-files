import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RegisterPage(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [name,setName]=useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await api.register({ email, password, name });
      alert('Registered id: ' + res.id);
      navigate('/login');
    } catch(err){
      alert(err.message || 'Register failed');
    }
  };

  return (
    <>
      <Navbar/>
      <main className="auth-page">
        <form className="card" onSubmit={handleRegister}>
          <h2>Create your account</h2>
          <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required/>
          <input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
          <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
          <button className="btn btn-primary" type="submit">Register</button>
        </form>
      </main>
      <Footer/>
    </>
  );
}
