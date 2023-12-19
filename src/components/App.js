
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [input, setInput]= useState('')
  const [filteredFruits, setFilteredFruits]= useState(fruits)


  const setInputValue = (e)=>{
    setInput(e.target.value)
    updateList();
  }
  const updateList = ()=>{
    setFilteredFruits(fruits.filter((item)=>{return item.includes(input.toLowerCase())}))
  }

  

  return (
    <>
    <h1>Search item</h1>
    <div>
        {/* Do not remove the main div */}
        <input type="text"  value={input} onChange={setInputValue}/>
    </div>

    <ul>
      { filteredFruits.map((item,index)=>{return <li key={index}>{item}</li>})}
    </ul>
    </>
  )
}

export default App
