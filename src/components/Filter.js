import React, { useState } from 'react';

import _ from 'lodash'; //import external library!


export function Filter(props) {

  return (
    <div>
      <p>Filter & Sort By</p>
      <div className="filters">
        <SortByNav
          cardData={props.cardData}
          sortByCallback={props.sortByCallback}
        />
        <TagsFilterNav 
          cardData={props.cardData}
          tags={props.tags}
          applyFilterCallback={props.applyFilterCallback}
        />

      </div>
    </div>
  )
}


function SortByNav(props) {
  // props
  const cardData = props.cardData;
  const sortByCallbackFunction = props.sortByCallback;

  let [sortByCriteria, setSortByCriteria] = useState(null);
  let [isAscending, setIsAscending] = useState(null);

  const handleClick = (event) => {
    let whichButton = event.currentTarget.name;
    let isAscendingBoolean = null;

    console.log(whichButton)
    console.log(sortByCriteria)
    if (whichButton !== sortByCriteria) {
      isAscendingBoolean = true;
      setSortByCriteria(whichButton);
      setIsAscending(isAscendingBoolean);
    } else if (whichButton === sortByCriteria) {
      if (isAscending === false) {
        isAscendingBoolean = null;
        whichButton = null;
        setIsAscending(isAscendingBoolean);
        setSortByCriteria(whichButton);
      } else {
        isAscendingBoolean = false;
        setIsAscending(isAscendingBoolean);
      }
    }
    sortByCallbackFunction(whichButton, isAscendingBoolean);
    console.log(whichButton, isAscendingBoolean)
    console.log(sortByCriteria, isAscending)
  }

  let sortedArray = _.sortBy(cardData, [sortByCriteria]);
  console.log('sortedArray', sortedArray);
  if (sortByCriteria != null && isAscending === false) {
    _.reverse(sortedArray);
  };

  return (
    <div>
      <p>Sort By </p>
      <ul className="list-unstyled">
        <li>PRICE
          <SortButton name="price" onClick={handleClick} active={sortByCriteria === 'price'} ascending={sortByCriteria === 'price' && isAscending === true} />
        </li>
        <li>RATING
          <SortButton name="rating" onClick={handleClick} active={sortByCriteria === 'rating'} ascending={sortByCriteria === 'rating' && isAscending === true} />
        </li>
        <li>NAME
          <SortButton name="title" onClick={handleClick} active={sortByCriteria === 'title'} ascending={sortByCriteria === 'title' && isAscending === true} />
        </li>
      </ul>
    </div>
  )
}

function SortButton(props) {
  let iconClasses = ""
  if (props.active) { iconClasses += ` active` }
  if (props.ascending) { iconClasses += ` flip` };
  return (
    <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
      <span className={"material-icons" + iconClasses} aria-label={`sort by ${props.name}`}>sort</span>
    </button>
  );
}


function TagsFilterNav(props) {
  // props
  const cardData = props.cardData;
  // const sortByCallbackFunction = props.sortByCallback;
  const uniqueTags = props.tags;
  const applyFilterCallbackFunction = props.applyFilterCallback

  const [checkedItems, setCheckedItems] = useState({});
  console.log(checkedItems)

  const handleCheckbox = (event) => {
    setCheckedItems({...checkedItems, [event.target.value] : event.target.checked})
  }

  const handleClick = event => {
    event.preventDefault();
    const identifiers = Object.keys(checkedItems);
    const active = identifiers.filter(function(id) {
      return checkedItems[id]
    })
    console.log(active);
    props.applyFilterCallback(active);
  }

  const liElemTagsArray = uniqueTags.map((tag) => {
    const element = <li key={tag}>
      <label>
        <input
          onChange={handleCheckbox}
          type="checkbox"
          value={tag} />
          {tag}
      </label>
    </li>;
    return element;
  })

  return(
    <div>
      <p>filter by tags</p>
      <ul className="list-unstyled">
        {liElemTagsArray}
      </ul>
      <div className="col-auto">
        <button id="submitButton" type="submit" className="btn btn-warning" onClick={handleClick}>Apply Filter</button>
      </div>
    </div>
  )
}





