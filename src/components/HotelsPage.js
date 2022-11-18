import React from 'react';

import { NavBar } from './NavBar.js';
import { Footer } from './Footer';



export function HotelsPage(props) {

  return (
    <body>
      <NavBar />
      <header>
        <h1>HOTELS</h1>
      </header>
      <div class="main-header">
        <p class="border border-dark">Filters</p>
      </div>

      <Footer />
    </body>

  )
}