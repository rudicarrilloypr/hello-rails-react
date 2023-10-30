import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greeting from './Greeting';
import { GreetingProvider } from '../contexts/GreetingContext';

function App() {
  return (
    <GreetingProvider>
    <Router>
      <Route path="/greeting" component={Greeting} />
    </Router>
   </GreetingProvider>
  );
}

export default App;
