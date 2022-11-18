import React from 'react';

export function NavBar(props) {
  return (
    <nav>
    <div className="logo">
      <img src="img/logo.jpg" alt="Logo Image" />
    </div>
    <div className="hamburger">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
    <ul className="nav-links">
      <li><a href="index.html">HOME</a></li>
      <li><a href="dinning.html">DINING</a></li>
      <li><a href="hotels.html">HOTELS</a></li>
      <li><a href="activities.html">ACTIVITIES</a></li>
      <li><a href="about.html">ABOUT</a></li>
      <li><button className="login-button" href="#">Login</button></li>
      <li><button className="join-button" href="forms.html">Join</button></li>
    </ul>
  </nav>
  )
}