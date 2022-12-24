import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeaderCard from './headerCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableCardHeader from './tableCardHeader';
import TableCard from './tableCard';
import App from './deneme.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderCard />
    <TableCardHeader />
    <TableCard />
    <App />
  </React.StrictMode>
);