import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.scss';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import Recent from './components/Recent/Recent';
import Watchlist from './components/Watchlist/Watchlist';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/recentlyadded' element={<Recent/>} />
        <Route path='/watchlist' element={<Watchlist/>} />
      </Routes>
    </Router>
  );
}

export default App;
