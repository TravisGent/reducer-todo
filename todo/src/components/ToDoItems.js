import React, { useReducer, useState } from 'react';
import "../App.css";
import { reducer, initialState } from "../reducers/Reducer";

function ToDoItmes() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDoText, setNewToDoText] = useState("");
  const [boolVal, setBoolVal] = useState(false);
  console.log(state);

  const handleSubmit = event => {
    event.preventDefault();
  }

  const handleChanges = event => {
    setNewToDoText(event.target.value);
  }

  const toggleItem = event => {
    event.preventDefault();
    setBoolVal(!boolVal);
  }

  return (
    <div>ToDo Items:
      {state.map(item => (
            <div className="listItem" onClick={() => toggleItem}>{item.item}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" name="item" value={newToDoText} onChange={handleChanges}/>
        <button onClick={() => dispatch({ type: "ADD_TODO", payload: newToDoText})}>Add</button>
      </form>
    </div>
  );
}

export default ToDoItmes;