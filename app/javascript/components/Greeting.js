import React, { useContext, useEffect } from 'react';
import { GreetingContext } from '../contexts/GreetingContext';

function Greeting() {
  const { state, dispatch } = useContext(GreetingContext);

  useEffect(() => {
    // Fetch the greeting from the Rails API
    fetch('/random_greeting')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SET_GREETING', payload: data.message });
      });
  }, [dispatch]);

  return <h2>{state.message}</h2>;
}

export default Greeting;
