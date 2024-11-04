import axios from 'axios';

const refreshToken = async () => {
  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: 'YOUR_REFRESH_TOKEN',
        client_id: 'e533e73d76c3409281470e2b4f908400',
        client_secret: '1e222e14352142e1925db01f780cbf80'
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
    );
    console.log('New Access Token:', response.data.access_token);
  } catch (error) {
    console.error('Error refreshing access token:', error);
  }
};

refreshToken();
