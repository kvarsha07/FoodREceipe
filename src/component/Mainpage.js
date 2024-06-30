import React, { useState } from 'react'
import Mealcard from './Mealcard'

const Mainpage = () => {
  const [data, setData] = useState()
  const [search, setSearch] = useState()
  const [msg,setMsg]=useState("")

  const handleInput = (event) => {
    setSearch(event.target.value)
  }

  const dataFetch = async () => {
    if(search==""){
       setMsg("please enter something")

    }
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const jsonData = await get.json();
    // console.log(jsonData.meals)
    setData(jsonData.meals)
  
  }

  


  // console.log(data)
  return (
    
      
    <div className='container'>
    <h1 className='head'>FOOD RECIPE APP</h1>
      <div className='searchBar'>
        <input type='text' placeholder='Enter Dishe' onChange={handleInput} />
        <button onClick={dataFetch}>search</button>
      </div>
      <h3>{msg}</h3>
      <div>
        <Mealcard details={data} />
      </div>
    </div>
  )
}

export default Mainpage