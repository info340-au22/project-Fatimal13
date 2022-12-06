
import React from 'react';

import { PageContent } from './PageContent.js';

export function ActivitiesPage(props) {
  // [DATA] getting only cards belong that page
  let pageCardData = props.cardData.filter((cardObj) => {
    return cardObj.category === "activity";
  })
  return (
    <div>
      <header>
        <h1>ACTIVITIES</h1>
      </header>
      <PageContent pageCardData={pageCardData} />
    </div>
  )
}