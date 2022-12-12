import React from 'react';

import { CardPageContent } from './CardPageContent.js';

export function HotelsPage(props) {
  // [DATA] getting only cards belong that page
  let pageCardData = props.cardData.filter((cardObj) => {
    return cardObj.category === "hotel";
  })
  return (
    <div>
      <header>
        <h1>HOTELS</h1>
      </header>
      <CardPageContent pageCardData={pageCardData} />
    </div>
  )
}

