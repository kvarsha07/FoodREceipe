import React from 'react'
import { NavLink } from 'react-router-dom';

const Mealcards = ({details}) => {
    console.log(details);
  return (
    <div className='meals'>
        {details ?  details.map((curItem)=>{
            return (
                <div className='mealImg'>
                  <img src={curItem.strMealThumb}/>
                  <p>{curItem.strMeal}</p>
                  <NavLink to={`/${curItem.idMeal}`}><button >Recipe</button></NavLink>
        
                </div>
            )
        }) :  "Data Not Found"
        }
    </div>
  )
}

export default Mealcards