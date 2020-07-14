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

  const handleToggle = id => {
    dispatch({
      type: "TOGGLE",
      id: id
    })
  }

  return (
    <div>ToDo Items:
      {state.map(item => (
        <div key={item.id} onClick={() => handleToggle(item.id)} className={`listItem${item.completed ? `Completed` : ``}`}>{item.item}</div>
      ))}
      {console.log(state)}
      <form onSubmit={handleSubmit}>
        <input type="text" name="item" value={newToDoText} onChange={handleChanges}/>
        <button onClick={() => dispatch({ type: "ADD_TODO", payload: newToDoText})}>Add</button>
      </form>
      <button onClick={() => dispatch({ type: "CLEAR_COMPLETED"})}>Clear Completed</button>
    </div>
  );
}

export default ToDoItmes;