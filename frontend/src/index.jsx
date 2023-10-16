import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './App';
import './index.css';

// redux global store
const store = createStore(reducer, compose(applyMiddleware(thunk)));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
