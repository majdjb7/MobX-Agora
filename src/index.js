import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Item } from '../src/stores/Item'
import { Inventory } from '../src/stores/Inventory'

let potatoes = new Item("Potatoes", 10, 1)
let corn = new Item("Corn", 15, 2)
let sombreros = new Item("Sombreros", 30, 4)
let inventory = new Inventory()
inventory.list.push(potatoes)
inventory.list.push(corn)
inventory.list.push(sombreros)


ReactDOM.render(
  <React.StrictMode>
    <App store={inventory}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
