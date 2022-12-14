import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
