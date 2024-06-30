import React from "react";
import Mainpage from "./component/Mainpage";
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Mealinfo from "./component/Mealinfo";

function App (){
  return(
    <div>
      {/* <Mainpage/> */}
      <Routes>
      <Route path ="/" element={<Mainpage/>}/>
        <Route  path="/:mealId" element={<Mealinfo/>}  />
      </Routes>
      </div>
  )
} export default App;