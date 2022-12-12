import React, { useState } from 'react';

import _ from 'lodash'; //import external library!

import { CardItems } from './CardItems.js'
import { CardFilter } from './CardFilter.js';

export function CardPageContent(props) {
  let pageCardData = props.pageCardData

  // getting unique values for the filter
  let allTagsArray = [];
  pageCardData.forEach(getUniqueTags);
  function getUniqueTags(item) {
    const tags = item.tags;
    allTagsArray.push(...tags);
  }
  const uniqueTags = [...new Set(allTagsArray)];

  //states
  const [selectedValues, setSelectedValue] = useState(uniqueTags);
  const [sortByCriteria, setSortByCriteria] = useState(null);
  const [isAscending, setIsAscending] = useState(null);

  //function
  function sortByCallback(sortByCriteria, isAscending) {
    setSortByCriteria(sortByCriteria);
    setIsAscending(isAscending);
  }
  function applyFilterCallback(checkedValuesArray) {
    setSelectedValue(checkedValuesArray);
  }

  // SortBy
  pageCardData = _.sortBy(pageCardData, [sortByCriteria]);
  if (sortByCriteria != null && isAscending === false) {
  _.reverse(pageCardData);
  }
  // Filter 
  pageCardData = pageCardData.filter((element) => {
    return selectedValues.some(i => element.tags.includes(i))
  })


  // creating card items
  const cardArray = pageCardData.map((cardObj) => {
    const element = (
      <CardItems
        cardData={cardObj}
        key={cardObj.title} />
    )
    return element;
  })

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CardFilter 
            cardData={pageCardData}
            sortByCallback={sortByCallback}
            tags={uniqueTags}
            applyFilterCallback={applyFilterCallback}
            applyClearCallback={applyFilterCallback}
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
