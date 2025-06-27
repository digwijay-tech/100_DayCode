import React, { useState } from 'react'
import FetchProduct from './FetchProduct'

const SearchBox = () => {
    const [category , setCategory] =useState("")
    console.log(category)
  return (
    <>
    <div className='find-container'>
        <h2>Search for filter</h2>
        <input type="text" value={category} placeholder='Search to filter' onChange={(e) => setCategory(e.target.value)}/>
    </div>
    <FetchProduct category = {category}/>
    </>
  )
}

export default SearchBox