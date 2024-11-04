import React, { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';
import { Link } from "react-router-dom";
import { getAlbums } from "../API/axiosInstance"; // Import the function for fetching albums

const Album = () => {
  const [albums, setAlbums] = useState([]);
  const albumIds = '4aawyAB9vmqN3uQ7FjRGTy'; // Replace with actual album IDs

  const fetchAllAlbums = async () => {
    try {
      const albumData = await getAlbums(albumIds); // Fetch albums using the helper function
      setAlbums(albumData || []); // Save albums to state (ensure it's an array)
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  useEffect(() => {
    fetchAllAlbums();
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <div className="mt-36 ml-96 font-bold text-4xl">
          <Link to="/album"><h2>Albums</h2></Link>
        </div>

        <div className="mt-36 ml-96 flex flex-wrap gap-4">
          {albums.length > 0 ? (
            albums.map((album, index) => (
              <div key={album.id || index}>
                {album.images && album.images.length > 0 ? (
                  <img src={album.images[0].url} alt={album.name || "No name available"} />
                ) : (
                  <p>No image available</p>
                )}
                <p>{album?.name || "Unknown Album Name"}</p>
              </div>
            ))
          ) : (
            <p>Loading albums...</p>
          )}
        </div>

        <div className="mt-36 ml-96 flex flex-wrap gap-4">
          {albums.map((album, index) => (
            album && (
              <AlbumCard
                key={album.id || index}
                images={album.images}
                name={album.name || "Unknown Album Name"}
                type={album.type}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Album;
