import React, { useState } from 'react'
import SearchComponent from './SearchComponent/SearchComponent'
import ListComponent from './ListComponent/ListComponent'

const MainComponent = () => {
    const [filterName,setFilterName] = useState('')
    const [filterValue,setFilterValue] = useState('')

    const handleChange = (event)=>{
        setFilterName(event.target.value)
    }

    const handleSubmit = ()=>{
        console.log("filter name",filterName)
        setFilterValue(filterName)
    }


  return (
    <div className='m-4'>
      <SearchComponent filterName={filterName} onChange={handleChange} onSubmit={handleSubmit}/>
      <ListComponent filterValue={filterValue}/>
    </div>
  )
}

export default MainComponent
