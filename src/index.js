import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
// import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/PET-Movie-Box">
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
