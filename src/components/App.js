import React, { createContext, Component } from 'react';

import { NavBar } from './NavBar.js';
import ProductsList from "./ProductsList"
import { Footer } from './Footer';

import { HomePage } from './HomePage';

import { FormPage } from './FormPage';

import { HotelsPage } from './HotelsPage.js';
import { ActivitiesPage } from './ActivitiesPage.js';
import { DiningPage } from './DiningPage';

import { About } from './About';
import { QuizPage } from './QuizPage';

// importing data
import CARD_DATA from '../data/card_data.json';

function App(props) {
  return (
    <div>
      <NavBar />
      {/*<QuizPage /> 
      {/* <HomePage /> */} */}
      <HotelsPage cardData={CARD_DATA}/>
      {/*{/* <ActivitiesPage cardData={CARD_DATA}/>*/} */}
      {/*<DiningPage cardData={CARD_DATA}/>*/}
      {/*<FormPage />*/}
      {/*{/* <About />*/} */}
      <Footer />
    </div>
  )
}

export default App;

