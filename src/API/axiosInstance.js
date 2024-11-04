import axios from "axios";

// Replace with your client ID and client secret from the Spotify Developer Dashboard
const clientId = 'e533e73d76c3409281470e2b4f908400';
const clientSecret = '1e222e14352142e1925db01f780cbf80';

// Function to get a new authorization token
const getAuthToken = async () => {
  const authUrl = 'https://accounts.spotify.com/api/token';
  const response = await fetch(authUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`)
    },
    body: 'grant_type=client_credentials'
  });
  const data = await response.json();
  return data.access_token;
};

// Create an Axios instance for Spotify API
export const spotifyApi = axios.create({
  baseURL: "https://api.spotify.com/",
  headers: {
    'Content-Type': 'application/json'
  }
});

// Set up an interceptor to add the Authorization token
spotifyApi.interceptors.request.use(async (config) => {
  const token = await getAuthToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Function to get related artists
export const getRelatedArtists = async (artistId) => {
  try {
    const response = await spotifyApi.get(`/v1/artists/${artistId}/related-artists`);
    return response.data.artists; // Returns the related artists array
  } catch (error) {
    console.error("Error in fetching related artists:", error);
    throw error;
  }
};

// Function to get albums
export const getAlbums = async (albumIds) => {
  try {
    const response = await spotifyApi.get(`/v1/albums`, {
      params: {
        ids: albumIds // Pass comma-separated album IDs
      }
    });
    return response.data.albums; // Returns the albums array
  } catch (error) {
    console.error("Error fetching albums:", error);
    throw error;
  }
};

// Function to get playlists
export const getPlaylists = async (playlistId) => {
  try {
    const response = await spotifyApi.get(`/v1/playlists/${playlistId}`);
    return response.data; // Returns the playlist data
  } catch (error) {
    console.error("Error fetching playlists:", error);
    throw error;
  }
};
