import React from "react";
import SideBar from "./SideBar";
import PlayBar from "./PlayBar";
import Navbar from "./Navbar";
import AuthNavbar from "./AuthNavbar";
import { useState } from "react";
// import { fetchPodcastEpisodes } from "../../Utils/getPodcast";
import PopularArtist from "./PopularArtist";
import PlayList from'./Playlist'
import Album from './Album';

const Home = () => {
  const [user, setuser] = useState(false);
  return (
    <div>
      <SideBar />
      <PlayBar />
      <div className="flex ml-8 w-[60%]">
        <Navbar />
        {user ? Navbar : AuthNavbar}
      </div>
      <div className="w-[3/4]">
      <PopularArtist/>
      <PlayList/>
      <Album/>
      </div>
    </div>
  );
};

export default Home;
