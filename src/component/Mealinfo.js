import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Mealinfo = () => {
const {mealId} = useParams()
const [info,setInfo]=useState()
 

 useEffect(()=>{
  const getInfo=async()=>{
    const get  = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const jsonData = await get.json();
    setInfo(jsonData.meals[0])
  }

if (mealId){
     getInfo()
}
 }, [mealId])

  return (
    <div>
        {
        !info ? "Data not found" :
        <div className='mealInfo'>
         <img src={info.strMealThumb}/>
          <div className='info'>
            <h1>Recipe details</h1>
            <button>{info.strMeal}</button>
            <h3>Instraction</h3>
            <p>{info.strInstructions}</p>
        </div>
    </div>
    }
    </div>
    
  )
}

export default Mealinfo