import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductTable from './pages/Products-table/Product-table';
import Login from './pages/Login/Login';
import ProductPreview from './pages/Product-preview/Product-preview';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    {/* <ProductTable /> */}
    <ProductPreview />
  </React.StrictMode>
);


