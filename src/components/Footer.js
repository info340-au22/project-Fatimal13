import React from 'react';

export function Footer(props) {
  return (
    <footer>
      <div className="footer">
        <div className="ft-row">
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="ft-row">
          University of Washington<br/>Seattle, WA 98105 &copy; 2022
        </div>
      </div>
    </footer>
  )
}