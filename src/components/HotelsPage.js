import React, { useState } from 'react';

import _ from 'lodash'; //import external library!

import { CardItems } from './CardItems.js'
import { Filter } from './Filter.js';

export function HotelsPage(props) {
  // [DATA] getting only cards belong that page
  const pageCardData = props.cardData.filter((cardObj) => {
    return cardObj.category === "hotel";
  })

  //states
  const [selectedValues, setSelectedValue] = useState([]);
  const [sortByCriteria, setSortByCriteria] = useState(null);
  const [isAscending, setIsAscending] = useState(null);


  // getting unique values for the filter
  let allTagsArray = [];
  pageCardData.forEach(getUniqueTags);
  function getUniqueTags(item) {
    const tags = item.tags;
    allTagsArray.push(...tags);
  }
  const uniqueTags = [...new Set(allTagsArray)];


  // SortBy
  const sortedData = _.sortBy(pageCardData, [sortByCriteria]);
  if (sortByCriteria != null && isAscending === false) {
  _.reverse(sortedData);
  }
  
    // // Filter the data
    // displayedData = sortedData.filter((element) => {
    //   return selectedValues.includes(element.tags);
    //   console.log('hotel', selectedValues);
    //   console.log(element.tags);
    //   // console.log(displayedData)
    // })
  
  //function
  function sortByCallback(sortByCriteria, isAscending) {
    setSortByCriteria(sortByCriteria);
    setIsAscending(isAscending);
  }

  // function : applyFilterCallback
  function applyFilterCallback(checkedValuesArray) {
    setSelectedValue(checkedValuesArray);
  }





  // creating card items
  const cardArray = sortedData.map((cardObj) => {
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
            <Filter 
            cardData={sortedData}
            sortByCallback={sortByCallback}
            tags={uniqueTags}
            applyFilterCallback={applyFilterCallback}
            />
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
