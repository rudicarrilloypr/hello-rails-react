import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGreeting } from '../actions/greetingActions';

function Greeting() {
  const dispatch = useDispatch();

  // Usamos useSelector para obtener el saludo desde el store de Redux
  const greetingMessage = useSelector(state => state.greeting);

  useEffect(() => {
    // Fetch the greeting from the Rails API
    fetch('/random_greeting')
      .then((response) => response.json())
      .then((data) => {
        // Usa el action setGreeting para enviar el saludo al store de Redux
        dispatch(setGreeting(data.message));
      });
  }, [dispatch]);

  return <h2>{greetingMessage}</h2>;
}

export default Greeting;
