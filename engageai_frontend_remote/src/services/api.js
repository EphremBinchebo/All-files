import axios from 'axios';

/**
 * Set this to your remote backend base URL (no trailing slash), e.g.:
 * const BASE_URL = 'https://api.engageai.com'
 */
const BASE_URL = 'https://api.engageai.example'; // <<< replace with your remote URL

const api = axios.create({
  baseURL: BASE_URL + '/api/engageai',
  timeout: 15000,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export async function login(payload) {
  const r = await api.post('/auth/login', payload);
  return r.data;
}

export async function listCampaigns() {
  const r = await api.get('/campaigns');
  return r.data;
}

export async function listPayments() {
  const r = await api.get('/payments');
  return r.data;
}

export default api;
