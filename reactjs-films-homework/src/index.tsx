import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './pages/App/App';
import { Provider } from 'react-redux';
import store from './store/store';

// console.log(Provider);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
