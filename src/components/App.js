import React from 'react';

import { NavBar } from './NavBar.js';
import { Footer } from './Footer';

import { FormPage } from './FormPage';
import { HotelsPage } from './HotelsPage.js';
import { ActivitiesPage } from './ActivitiesPage.js';
import { DiningPage } from './DiningPage';

import { About } from './About';

import { HomePage } from '../index';


// importing data
import CARD_DATA from '../data/card_data.json';


function App(props) {
  return (
    <div>
      <NavBar />
      <HomePage />
      {/* <HotelsPage cardData={CARD_DATA}/> */}
      <ActivitiesPage cardData={CARD_DATA}/>
      {/* <DiningPage cardData={CARD_DATA}/> */}
      {/* <FormPage />  */}
      <About />
      <Footer />
    </div>
  )
}

export default App;
