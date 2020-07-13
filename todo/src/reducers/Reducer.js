export const toDoList = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
];

const addToDo = { 
    type: "ADD_TODO" 
}

export const reducer = (state, action) => {
  if(action.type === "ADD_TODO") {
    return state;
    /*return [{...state, }] */
  }
}

reducer(toDoList, addToDo);