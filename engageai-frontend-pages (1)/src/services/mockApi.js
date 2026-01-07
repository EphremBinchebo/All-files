/*
Simple mock API to simulate backend responses.
State is stored in-memory for demo purposes only.
*/
const state = {
  users: [],
  campaigns: [],
  nextUserId: 1,
  nextCampaignId: 1
};

export async function register({ email, password, name }) {
  const existing = state.users.find(u => u.email === email);
  if (existing) throw { message: 'User already exists' };
  const user = { id: state.nextUserId++, email, password, name, instagramToken: null, tiktokToken: null };
  state.users.push(user);
  return { id: user.id };
}

export async function login({ email, password }) {
  const user = state.users.find(u => u.email === email && u.password === password);
  if (!user) throw { status: 401, message: 'Invalid credentials' };
  // return fake JWT and id
  return { token: 'mock-jwt-token-' + user.id, id: user.id };
}

export async function createCampaign({ title, content, platform, scheduledAt }) {
  const c = { id: state.nextCampaignId++, title, content, platform, scheduledAt: scheduledAt || null, status: 'DRAFT' };
  state.campaigns.push(c);
  return c;
}

export async function listCampaigns() {
  return state.campaigns;
}

export async function previewCampaign(id) {
  const c = state.campaigns.find(x => x.id === id);
  if (!c) throw { message: 'Not found' };
  return 'PREVIEW:\n' + c.content;
}

export async function postNow(id) {
  const c = state.campaigns.find(x => x.id === id);
  if (!c) throw { message: 'Not found' };
  c.status = 'POSTED';
  return { message: 'Posted (mock) to ' + c.platform };
}

export async function connectSocial(userId, platform) {
  const u = state.users.find(x => x.id === Number(userId));
  if (!u) throw { message: 'User not found' };
  if (platform === 'instagram') u.instagramToken = 'mock_instagram_token_' + userId;
  if (platform === 'tiktok') u.tiktokToken = 'mock_tiktok_token_' + userId;
  return { status: 'connected', token: platform === 'instagram' ? u.instagramToken : u.tiktokToken };
}

export async function getUser(userId) {
  const u = state.users.find(x => x.id === Number(userId));
  if (!u) throw { message: 'User not found' };
  return u;
}
