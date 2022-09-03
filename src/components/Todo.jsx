import React, { useState } from "react";

function Todo(Props) {
  return (
    <div
      onClick={() => {
        Props.onChecked(Props.id);
      }}
    >
      <li>{Props.text}</li>
    </div>
  );
}

export default Todo;
