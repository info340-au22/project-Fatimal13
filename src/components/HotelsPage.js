import React from 'react';

import { CardItems } from './CardItems.js'
import Filter from './Filter2.js';

export function HotelsPage(props) {
  const rawCardData = props.cardData;

  const filteredCardData = rawCardData.filter((cardObj) => {
    return cardObj.category === "hotel";
  })

  const cardArray = filteredCardData.map((cardObj) => {
    const element = (
      <CardItems
        cardData={cardObj}
        key={cardObj.cardId} />
    )
    return element;
  })

  return (
    <div>
      <header>
        <h1>HOTELS</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-4 border">
            <Filter />
          </div>
          <div className="col-md-8">
            <section className="card__list row">
              {cardArray}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
