import React from 'react';
import { Link } from 'react-router-dom';

export function Footer(props) {
  return (
    <footer>
      <div className="footer">
        <div className="ft-row">
          <ul>
            <li><Link to="/about"><span>Contact us</span></Link></li>
            <li><Link to="#"><span>Our Services</span></Link></li>
            <li><Link to="#"><span>Privacy Policy</span></Link></li>
            <li><Link to="#"><span>Terms & Conditions</span></Link></li>
          </ul>
        </div>
        <div className="ft-row">
          University of Washington<br/>Seattle, WA 98105 &copy; 2022
        </div>
      </div>
    </footer>
  )
}