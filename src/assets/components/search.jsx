import axios from 'axios'
import React, { useState } from 'react'

const Search = ({onData, apikey, weather}) => {
    function handleClick (data){
        onData(data)
      }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let country = weather?.name//e.target.searchCountry.value
        if (e.target.searchCountry.value) {
            country = e.target.searchCountry.value
        } 
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apikey}`
        
        axios.get(URL)
        .then((data) => handleClick(data))
        .catch((err) => console.log(err))
    } 
  return (
    <form className='mr-1' onSubmit={handleSubmit}>
        <input id='searchCountry' type="text" placeholder='Search...' className='px-5 py-1 rounded-lg bg-slate-100/90'/>
        <button className='my-2 mx-3' onClick={handleClick}><i className='bx bx-search-alt-2 dark:text-white'></i></button>
    </form>
  )
}

export default Search
