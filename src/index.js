import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'store/configureStore';
import App from 'components/App';
if (process.env.ELECTRON) {
  const { disablePinchZoom } = require('electron/renderer');
  disablePinchZoom();
}

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
