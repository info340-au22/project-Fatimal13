import React, { useState } from 'react';

import _ from 'lodash'; //import external library!

import { CardItems } from './CardItems.js'
import { Filter } from './Filter.js';

export function HotelsPage(props) {
  // [DATA] prop: cardData from App
  const rawCardData = props.cardData;
  // [DATA] getting only cards belong that page
  const filteredCardData = rawCardData.filter((cardObj) => {
    return cardObj.category === "hotel";
  })

  // card data state
  const [cardDataArray, setCardDataArray] = useState(filteredCardData);
  

  //states
  const [selectedValue, setSelectedValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);


  // getting unique values for the filter
  let allTagsArray = [];
  cardDataArray.forEach(getUniqueTags);
  function getUniqueTags(item) {
    const tags = item.tags;
    allTagsArray.push(...tags);
  }
  const uniqueTags = [...new Set(allTagsArray)];




  //function
  function sortByCallback(sortByCriteria, isAscending) {
    // console.log('hotel: sortByCallback', sortByCriteria, isAscending)
    let sortedArray = _.sortBy(cardDataArray, [sortByCriteria]);
    // console.log('sortedArray', sortedArray);
    if (sortByCriteria != null && isAscending === false) {
      _.reverse(sortedArray);
    } 
    setCardDataArray(sortedArray);
  }



  // function : applyFilterCallback
  function applyFilterCallback(checkedValuesArray) {
    const displayedData = cardDataArray.filter((element) => {
      return checkedValuesArray.includes(element.tags);
      console.log('hotel', checkedValuesArray);
      console.log(element.tags);
      // console.log(displayedData)
    })
    setCardDataArray(displayedData);
  }





  // creating card items
  const cardArray = cardDataArray.map((cardObj) => {
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
            cardData={cardDataArray}
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
