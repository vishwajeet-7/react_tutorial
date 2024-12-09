import React, { useState } from 'react'

const SearchComponent = ({filterName,onChange,onSubmit}) => {

  return (
    <div className=''>
      <input type="text" name="" id="" value={filterName} onChange={onChange}/>
      <button onClick={onSubmit}>Search</button>
    </div>
  )
}

export default SearchComponent
