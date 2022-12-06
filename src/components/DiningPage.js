
import React from 'react';

import { PageContent } from './PageContent.js';

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
      <PageContent pageCardData={pageCardData} />
    </div>
  )
}