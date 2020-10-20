import React from 'react';
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
  return (
    <div className="container">
      <div className="shit">
        <h1>Topics</h1>
        <Dropdown title="Select movie" items={items} multiSelect/>
      </div>
    </div>
  );
}

export default App;
