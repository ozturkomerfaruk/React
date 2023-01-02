import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeaderCard from './headerCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableCard from './tableCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderCard />

    <TableCard />

  </React.StrictMode>
);