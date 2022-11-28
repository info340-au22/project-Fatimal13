import React from 'react';
import { Link } from 'react-router-dom';

export function NavBar(props) {
  return (
    <nav>
    <div className="logo">
      <img src="img/logo.jpg" alt="Logo" />
    </div>
    <div className="hamburger">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
    <ul className="nav-links">
      <li><Link to="/">HOME</Link></li>
      {/* <li><a href="index.html">HOME</a></li> */}
      <li><Link to="/dinings">DINING</Link></li>
      <li><Link to="/hotels">HOTELS</Link></li>
      <li><Link to="/activities">ACTIVITIES</Link></li>
      <li><Link to="/about">ABOUT</Link></li>

      <li>
        <Link to="">
          <button className="login-button">Login</button>
        </Link>
      </li>
      <li>
        <Link to="/form">
          <button className="login-button">Join</button>
        </Link>
      </li>
    </ul>
  </nav>
  )
}