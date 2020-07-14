export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
];

export const reducer = (state, action) => {
  if (action.type === "ADD_TODO") {
    return [
      ...initialState, 
      {
        item: action.payload,
        completed: false,
        id: new Date()
      }
    ]
  }
}
