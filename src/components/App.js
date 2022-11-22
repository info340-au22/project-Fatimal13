import React from 'react';

import { NavBar } from './NavBar.js';
import { Footer } from './Footer';

import { HotelsPage } from './HotelsPage.js';
import { HotelFilter } from "./HotelFilter";


// import { data }

function App(props) {
  return (
    <div>
      <NavBar />
      {/* <HomePage /> */}
      {/* <HotelsPage /> */}
      {/* <ActivityPage /> */}
      {/* <DinningPage /> */}
      {/* <FormPage /> */}
      {/* <About /> */}
      <HotelFilter/>
      <Footer />
    </div>
  )
}

export default App;
