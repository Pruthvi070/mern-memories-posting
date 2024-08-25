import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Updated imports

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} /> {/* Updated */}
          <Route path="/posts" element={<Home />} /> {/* Updated */}
          <Route path="/posts/search" element={<Home />} /> {/* Updated */}
          <Route path="/posts/:id" element={<PostDetails />} /> {/* Updated */}
          <Route path="/auth" element={user ? <Navigate to="/posts" /> : <Auth />} /> {/* Updated */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
