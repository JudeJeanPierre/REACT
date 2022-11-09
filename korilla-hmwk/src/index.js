import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ReceiptForm from './components/ReceiptForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ReceiptForm/>
  </React.StrictMode>
);


