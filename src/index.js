import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from "react-router-dom";
import OmkarKhaire from './OmkarKhaire';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <OmkarKhaire/>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
