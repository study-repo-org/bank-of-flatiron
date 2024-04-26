import React from 'react';

function Filter({ setSortingCriterion }) {
  const handleSortingChange = (e) => {
    setSortingCriterion(e.target.value);
  };

  return (
    <div className='filter-container'>
      <select onChange={handleSortingChange}>
        <option disabled selected>Filter Alphabetically</option>
        <option value="description">Description</option>
        <option value="category">Category</option>
      </select>
    </div>
  );
}

export default Filter;
