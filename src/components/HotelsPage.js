import React from 'react';

import { CardItems } from './CardItems.js'
import HOTEL_DATA from '../data/hotel_data.json';


export function HotelsPage(props) {

  const cardArray = HOTEL_DATA.map((hotelObj) => {
    const element = (
      <CardItems 
      cardData={hotelObj}
      key={hotelObj.cardId}/>
    )
    return element;
  })

  return (
    <div>
      <header>
        <h1>HOTELS</h1>
      </header>
      <div className="main-header">
        <p className="border border-dark">Filters</p>
      </div>
      <section className="card__list row">
        {cardArray}
      </section>
    </div>
  )
}
