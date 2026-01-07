import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed: ' + (err.response?.data || err.message));
    }
  };

  return (
    <div style={{display:'flex',height:'100vh',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
      <h1>SmartAI Engage</h1>
      <form onSubmit={handleLogin} style={{display:'flex',flexDirection:'column',width:260}}>
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />
        <button style={{marginTop:8}}>Login</button>
      </form>
    </div>
  );
}
