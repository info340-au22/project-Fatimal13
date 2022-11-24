import React from 'react';

export function Filter(props) {
  return (
    <div>
      <p>Filter</p>
      <div className="filters">
        <p>Sort By </p>
        <label><input type="checkbox" value=".b, .c1" /> price</label>
        <label><input type="checkbox" value=".b, .c2" /> star </label>
        <label><input type="checkbox" value=".b, .c2" /> title </label>
        <p>Filter</p>
        <label><input type="checkbox" value=".b, .c3" /> island </label>
        <label><input type="checkbox" value=".b, .c4" /> tags </label>
        
      </div>
    </div>
  )
}





