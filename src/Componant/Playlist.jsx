import React, { useState, useEffect } from 'react';
import PlaylistCard from './PlaylistCard';
import { getPlaylists } from "../API/axiosInstance"; // Import the correct function to fetch playlists
import { Link } from "react-router-dom";

const PlayList = () => {
  const [playlists, setPlaylists] = useState([]); // State for managing playlists
  const playlistId = '3cEYpjA9oz9GiPac4AsH4n'; // Replace with your actual playlist ID

  const fetchAllPlaylists = async () => {
    try {
      const response = await getPlaylists(playlistId); // Fetch the specific playlist
      setPlaylists([response]); // Assuming response is an object and wrapping it in an array
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  };

  useEffect(() => {
    fetchAllPlaylists();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="mt-36 ml-96 font-bold text-4xl">
        <Link to="/playlist"><h2>Spotify PlayList</h2></Link>
      </div>
      <div className="mt-36 ml-96 flex flex-wrap gap-4">
        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <PlaylistCard 
              key={playlist.id} 
              images={playlist.images} 
              name={playlist.name} 
              type={playlist.type} 
            />
          ))
        ) : (
          <p>No playlists available</p>
        )}
      </div>
    </div>
  );
};

export default PlayList;
