import React from 'react';
import { Link } from 'react-router-dom';

export function Footer(props) {
  return (
    <footer>
      <div className="footer">
        <div className="ft-row">
          <ul>
            <li><Link to="/about"><span>Contact us</span></Link></li>
            <li><span>|</span></li>
            <li><span>Data Sourced from Expedia</span></li>
          </ul>
        </div>
        <div className="ft-row">
          University of Washington<br/>Seattle, WA 98105 &copy; 2022
        </div>
      </div>
    </footer>
  )
}