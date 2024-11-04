import React, { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';
import { Link } from "react-router-dom";
import { getRelatedArtists } from "../API/axiosInstance"; // Use this to fetch related artists

const PopularArtist = () => {
  const [artists, setArtists] = useState([]);
  const artistId = '0TnOYISbd1XYRBk9myaseg'; // Artist ID to get related artists

  const fetchRelatedArtists = async () => {
    try {
      const relatedArtists = await getRelatedArtists(artistId); // Fetch related artists using helper function
      setArtists(relatedArtists); // Save artists to state
    } catch (error) {
      console.error("Error fetching related artists:", error);
    }
  };

  useEffect(() => {
    fetchRelatedArtists();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="mt-36 ml-96 font-bold text-4xl">
        <Link to="/popularartist"><h2>Popular Artists</h2></Link>
      </div>
      <div className="mt-36 ml-96 flex flex-wrap gap-4">
        {artists && artists.map((artist) => (
          <ArtistCard 
            key={artist.id} 
            images={artist.images} 
            name={artist.name} 
            type={artist.type} 
          />
        ))}
      </div>
    </div>
  );
};

export default PopularArtist;
