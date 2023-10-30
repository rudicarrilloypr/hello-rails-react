import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../components/App';
import { Provider } from 'react-redux';
import store from '../store/store'; 

document.addEventListener('DOMContentLoaded', () => {
  const root = document.body.appendChild(document.createElement('div'));
  const appRoot = createRoot(root);
  
  appRoot.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
