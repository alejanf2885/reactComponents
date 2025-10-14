import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DibujosComplejosRender from './components/DibujosComplejosRender';
import PadreDeporte from './components/PadreDeporte';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PadreDeporte />
  </React.StrictMode>
);


reportWebVitals();
