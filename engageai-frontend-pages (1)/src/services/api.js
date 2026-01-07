import * as mock from './mockApi';

// Wrapper to simulate network latency
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function register(payload) {
  await delay(300);
  return mock.register(payload);
}

export async function login(payload) {
  await delay(300);
  return mock.login(payload);
}

export async function createCampaign(payload) {
  await delay(300);
  return mock.createCampaign(payload);
}

export async function listCampaigns() {
  await delay(200);
  return mock.listCampaigns();
}

export async function previewCampaign(id) {
  await delay(200);
  return mock.previewCampaign(id);
}

export async function postNow(id) {
  await delay(200);
  return mock.postNow(id);
}

export async function connectSocial(userId, platform) {
  await delay(200);
  return mock.connectSocial(userId, platform);
}

export async function getUser(userId) {
  await delay(200);
  return mock.getUser(userId);
}
