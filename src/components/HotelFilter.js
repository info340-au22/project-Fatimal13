import React from "react";
import "../index.css";
import { AiOutlineSearch } from "react-icons/ai";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
  }
const Filters = () => {
    const [value, setValue] = React.useState([0, 300]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <div style={{width:1000}}>
    <div style={{backgroundColor:'white', marginLeft:300,paddingLeft:50 , paddingTop:20}}>
        
      <div>
        <label className="label">Search by hotel name</label>
        <br />
        <div class="wrapper">
          <div class="icon">
            <AiOutlineSearch />
          </div>
          <input class="input"></input>
        </div>
        <hr className="break" />
      </div>
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
      <Box sx={{ width: 150 }}>
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <p>$300</p>
        <p>$1000+</p>
        </div>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
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
  );
};

export default Filters;