import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [input, setInput] = useState('');
  const [filteredFruits, setFilteredFruits] = useState(fruits);

  const setInputValue = (e) => {
    setInput(e.target.value);
  };
  
  useEffect(()=>{
    updateList();
  },[input])
  const updateList = () => {
    setFilteredFruits(fruits.filter((item) => item.toLowerCase().includes(input.toLowerCase())));
  };

  return (
    <>
      <h1>Search item</h1>
      <div>
        {/* Do not remove the main div */}
        <input type="text" value={input} onChange={setInputValue} />
      </div>

      <ul>
        {filteredFruits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
