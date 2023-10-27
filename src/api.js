//api.js 
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000', // URL  backend
  withCredentials: true, 
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

// Interception des requêtes pour ajouter le token d'authentification
apiClient.interceptors.request.use(config => {
    const tokenData = JSON.parse(localStorage.getItem("authCode"));
    if (tokenData && tokenData.accessToken) {
      config.headers['Authorization'] = `Bearer ${tokenData.accessToken}`;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });
  

export default {
  login() {
    return apiClient.get('/login');
  },
  logout() {
    return apiClient.get('/logout');
  },
  getTracks() {
    return apiClient.get('/tracks');
  },
  getRecentTracks() {
    return apiClient.get('/recent-tracks');
  },
  getArtistRecommendations(artistName) {
    return apiClient.get(`/artist-recommendations?artist_name=${artistName}`);
  },
};
