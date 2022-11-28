import React from 'react';

import { CardItems } from './CardItems.js'
// import { Filter } from './Filter.js';


export function DiningPage(props) {
  const rawCardData = props.cardData;

  const filteredCardData = rawCardData.filter((cardObj) => {
    return cardObj.category === "dining";
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
        <h1>DINING</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-4 border">
            {/* <Filter /> */}
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
