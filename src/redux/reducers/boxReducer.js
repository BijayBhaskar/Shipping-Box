// src/redux/reducers/boxReducer.js
const initialState = [];

const boxReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOX':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default boxReducer;
