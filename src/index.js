import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DibujosComplejosRender from './components/DibujosComplejosRender';
import PadreNumero from './components/PadreNumero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <PadreNumero />
  </React.StrictMode>
);


reportWebVitals();
