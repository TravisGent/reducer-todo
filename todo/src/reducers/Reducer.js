export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
];

export const reducer = (state, action) => {
  if (action.type === "ADD_TODO") {
    const newState = {
      item: action.payload,
      completed: false,
      id: Date.now()
    }
    return [...state, newState];
  }
  if (action.type === "TOGGLE") {
    return state.map(obj => {
      return obj.id === action.id ? { ...obj, completed : !obj.completed}:obj})
  }
  if (action.type === "CLEAR_COMPLETED") {
    return state.filter(obj => !obj.completed === true)
  }
  else {
    return state;
  }
}
