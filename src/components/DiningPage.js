
import React from 'react';

import { CardPageContent } from './CardPageContent.js';

export function DiningPage(props) {
  // [DATA] getting only cards belong that page
  let pageCardData = props.cardData.filter((cardObj) => {
    return cardObj.category === "dining";
  })
  return (
    <div>
      <header>
        <h1>DINING</h1>
      </header>
      <CardPageContent pageCardData={pageCardData} />
    </div>
  )
}