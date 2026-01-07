import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await api.post('/auth/register', { email, password, name: email.split('@')[0] });
    alert('Registered with id: ' + res.data.id);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('userId', res.data.id);
    navigate('/dashboard');
  };

  return (
    <div style={{display:'flex',height:'100vh',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
      <h1>EngageAI</h1>
      <form onSubmit={handleLogin} style={{display:'flex',flexDirection:'column',width:300}}>
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />
        <div style={{marginTop:8}}>
          <button onClick={handleRegister} style={{marginRight:8}}>Register</button>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
