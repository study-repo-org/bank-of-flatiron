import React from 'react'

function Search({ setSearchTerm }) {

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='search'>
      <input type='text' onChange={handleInputChange} placeholder='Search your Recent Transactions Description | Category | Amount'/>
    </div>
  )
}

export default Search