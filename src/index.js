import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'store/configureStore';
import App from 'components/App';
import * as nemobusMethods from 'libs/nemobus-methods';

if (process.env.ELECTRON) {
  const { disablePinchZoom } = require('electron/renderer');
  disablePinchZoom();
}

if (process.env.ELECTRON) {
	nemobusMethods.connect('/tmp/nemo.bus.0');
	nemobusMethods.advertise('set', '/nemocard');
}

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
