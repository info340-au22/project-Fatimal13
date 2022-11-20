import React from 'react';

import { NavBar } from './NavBar.js';
import { Footer } from './Footer';

import { HotelsPage } from './HotelsPage.js';

function App(props) {
  return (
    <body>
      <NavBar />
      {/* <HomePage /> */}
      <HotelsPage />
      {/* <ActivityPage /> */}
      {/* <DinningPage /> */}
      {/* <FormPage /> */}
      {/* <AboutPage /> */}
      <Footer />
    </body>
  )
}

export default App;
