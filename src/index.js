import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
import reportWebVitals from './reportWebVitals';
import { Item } from '../src/stores/Item'
import { Inventory } from '../src/stores/Inventory'

let potatoes = new Item("Potatoes", 10, 1)
let corn = new Item("Corn", 15, 2)
let sombreros = new Item("Sombreros", 30, 4)
let store = new Inventory()
store.list.push(potatoes)
store.list.push(corn)
store.list.push(sombreros)

const stores = {
  store,
  Item
}

ReactDOM.render(
  <Provider {...stores}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
