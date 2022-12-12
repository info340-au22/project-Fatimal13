import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {getAuth, signOut} from 'firebase/auth';


export function NavBar(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const currentUser = props.currentUser;

  const handleClick = (event) => {
    setIsNavExpanded(!isNavExpanded);
  }

  const handleSignOut = (event) => {
    console.log("signing out");
    signOut(getAuth());
  }  

  return (
    <nav className="navigation">
    <div className="logo">
      <img src="img/logo.jpg" alt="Logo" />
    </div>
    <div className="hamburger" onClick={handleClick}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
      <ul className={isNavExpanded ? "nav-links open" : "nav-links"}>
        <li><Link to="/"><span className="aLink" onClick={handleClick}>HOME</span></Link></li>
        <li><Link to="/dinings"><span className="aLink" onClick={handleClick}>DINING</span></Link></li>
        <li><Link to="/hotels"><span className="aLink" onClick={handleClick}>HOTELS</span></Link></li>
        <li><Link to="/activities"><span className="aLink" onClick={handleClick}>ACTIVITIES</span></Link></li>
        <li><Link to="/about"><span className="aLink" onClick={handleClick}>ABOUT</span></Link></li>
        
        {/* send currentUser as a prop */}
        {currentUser.userId &&
          <li className="nav-item">
            <button className="login-button" onClick={handleSignOut}>Sign Out</button>
          </li>
        }
        {!currentUser.userId &&
          <li>
            <Link to="/signin">
              <button className="login-button" onClick={handleClick}>Login</button>
            </Link>
          </li>
        }
        <li>
          <Link to="/form">
            <button className="join-button" onClick={handleClick}>Join</button>
          </Link>
        </li>
      </ul>
  </nav>
  )
}