import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Componant/Home';
import Search from '../src/Componant/Search';
import Signup from '../src/Componant/Signup';
import Login from '../src/Componant/Login';
import PopularArtist from '../src/Componant/PopularArtist';
import Playlist from '../src/Componant/Playlist';
import Album from '../src/Componant/Album';
import User from '../src/Componant/User';
import Auth from '../src/Componant/Auth';
import PlaylistCard from './Componant/PlaylistCard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/popularartist" element={<PopularArtist />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/album" element={<Album />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/PlaylistCard" element={<PlaylistCard />} />
   
      <Route path="/user" element={<User />} />
    </Routes>
  );
}
