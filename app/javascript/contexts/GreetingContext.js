import React, { createContext, useReducer } from 'react';

const initialState = { message: '' };
const GreetingContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_GREETING':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const GreetingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GreetingContext.Provider value={{ state, dispatch }}>
      {children}
    </GreetingContext.Provider>
  );
};

export { GreetingContext, GreetingProvider };
