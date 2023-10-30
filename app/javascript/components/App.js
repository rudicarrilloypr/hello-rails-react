import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import { GreetingProvider } from '../contexts/GreetingContext';

function App() {
  return (
    <GreetingProvider>
      <Router>
        <Routes>
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </Router>
    </GreetingProvider>
  );
}

export default App;
