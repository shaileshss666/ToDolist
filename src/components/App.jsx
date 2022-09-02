import React, { useState } from "react";

function App() {
  const [inputtext, setInputtext] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputtext(newValue);
  }
  function handleItems() {
    setItems((prevValue) => {
      return [...prevValue, inputtext];
    });
    setInputtext("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="item"
          onChange={handleChange}
          value={inputtext}
        />
        <button onClick={handleItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((itemvalue) => (
            <li>{itemvalue}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
