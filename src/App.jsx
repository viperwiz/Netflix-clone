import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.scss';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Movies from './pages/Movies/Movies';
import Recent from './pages/Recent/Recent';
import Watchlist from './pages/Watchlist/Watchlist';
import Footer  from './components/Footer/Footer';

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
      <Footer/>
    </Router>
  );
}

export default App;
