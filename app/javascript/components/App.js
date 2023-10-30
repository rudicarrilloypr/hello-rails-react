import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import { Provider } from 'react-redux';
import store from '../store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
