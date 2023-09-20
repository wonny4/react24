import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// style
import '../common/css/common.css';
import 'bootswatch/dist/sketchy//bootstrap.min.css';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
