import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

function Header() {
  return (
    <div className='nav'>
        <div className="left-nav">
            <img src='/public/logo.png'/>
            <div className="links">
                <Link to='/'>Tv Shows</Link>
                <Link to='movies'>Movies</Link>
                <Link to='recentlyadded'>Recently Added</Link>
                <Link to='watchlist'>My WatchList</Link>
            </div>
        </div>
        <i className="ri-search-line"></i>
        
    </div>
  )
}

export default Header