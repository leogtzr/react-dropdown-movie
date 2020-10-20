import React, { useEffect, useState } from 'react';
import './App.scss';
import Dropdown from  "./Dropdown";

const items = [
  {
    id: 1, 
    value: "Lord of the Rings"
  },
  {
    id: 2,
    value: "The Prestige"
  },
  {
    id: 3,
    value: "Blade Runner 2020"
  }
];

function App() {

  const [selectedItems, setSelectedItems] = useState([]);

  function handleDropdownSelection(newValue) {
    setSelectedItems(newValue);
  }

  return (
    <div className="container">
      <div className="movie">
        <h1>Topics</h1>
        <Dropdown title="Select movie" items={items} onSelect={handleDropdownSelection}/>
        {
          selectedItems.map((x) => (
          <h1 key={x.id}>{x.value}</h1>
          ))
        }
      </div>
    </div>
  );
}

export default App;
