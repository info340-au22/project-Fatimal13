import React from "react";
import "../index.css";
// import { AiOutlineSearch } from "react-icons/ai";


export function HotelFilter(props) {
  return (
     <div>
    <header>
    <h1>FORM</h1>
     </header>
    <div style={{width:1000}}>
    <div style={{backgroundColor:'white', marginLeft:300,paddingLeft:50 , paddingTop:20}}>
        
      {/* <div>
        <label className="label">Filter by</label>
        <br />
      </div> */}
      <div style={{ marginTop: 30 }}>
        <label className="sublabel">Popular Filters</label>
        <br />
        <div style={{marginTop:10}}>
        <input type="checkbox" />
        All Inclusive
        </div>
        <div style={{marginTop:10}}>
        <input type="checkbox" />
        Ocean View
        </div>
        <div style={{marginTop:10}}>
        <input type="checkbox" />
        Pet Friendly
        </div>
        <div style={{marginTop:10}}>
        <input type="checkbox" />
        Hotel
        </div>
        <div style={{marginTop:10}}>
        <input type="checkbox" />
        Fully refundable
        </div>
        <br/>
       
      </div>
      <div style={{marginTop:20}}> 
      <label className="sublabel">Price per night</label>
      <br/>

      </div>
      <div>
      <label className="sublabel"> Rating</label>
      <div style={{marginTop:10}}>
        <input type="checkbox" />
        Any
        </div>
        <div style={{marginTop:10}}>
        <input type="checkbox" />
        Wonderful 4.5+
        </div>
        <div style={{marginTop:10}}>
        <input type="checkbox" />
        Very Good 4+
        </div>
        <div style={{marginTop:10}}>
        <input type="checkbox" />
        Good 3.5+
        </div>
       
        <br/>

      </div>
    </div>
    </div>
    </div>
  );
};
