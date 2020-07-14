import React, { useReducer, useState } from 'react';
import "../App.css";
import { reducer, initialState } from "../reducers/Reducer";

function ToDoItmes() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDoText, setNewToDoText] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  }

  const handleChanges = event => {
    setNewToDoText(event.target.value);
  }

  return (
    <div>ToDo Items:
      {state.map(item => (
            <div className="listItem"> {item.item}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" name="item" value={newToDoText} onChange={handleChanges}/>
        <button onClick={() => dispatch({ type: "ADD_TODO", payload: newToDoText})}>Add</button>
      </form>
    </div>
  );
}

export default ToDoItmes;