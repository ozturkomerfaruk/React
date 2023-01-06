import React from 'react';
import './css/App.css';
import FilterItemForm from './components/FilterItemForm'
import AddItemForm from './components/AddItemForm'
import ItemList from './components/ItemList'
import ItemsContextProvider from './contexts/ItemsContext'

function App() {
  return (
    <ItemsContextProvider>
      <div className="container">
        <h1 className="header">ItemList App</h1>
        <FilterItemForm/>
        <AddItemForm/>
        <ItemList/>
      </div>
    </ItemsContextProvider>
  );
} //end-App

export default App;
