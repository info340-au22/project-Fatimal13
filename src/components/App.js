import React from 'react';

import { NavBar } from './NavBar.js';
import { Footer } from './Footer';

import { FormPage } from './FormPage';
import { HotelsPage } from './HotelsPage.js';


// import { data }

function App(props) {
  return (
    <div>
      <NavBar />
      {/* <HomePage /> */}
      <HotelsPage />
      {/* <ActivityPage /> */}
      {/* <DinningPage /> */}
      <FormPage /> 
      {/* <AboutPage /> */}
      <Footer />
    </div>
  )
}

export default App;
