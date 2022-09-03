import { filters } from "pug/lib";
import React, { useState } from "react";
import Todo from "./Todo";
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
  function deleteItem(id) {
    setItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
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
          {items.map((itemvalue, index) => (
            <Todo
              key={index}
              id={index}
              text={itemvalue}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
