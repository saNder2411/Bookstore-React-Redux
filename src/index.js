import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/app/app';

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense>
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
