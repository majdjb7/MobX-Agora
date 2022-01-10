import React, { Component } from 'react';
import { observer } from 'mobx-react'
import '../App.css'
class Item extends Component {

  buyItem = () => {
    this.props.store.buyItem(this.props.item.name)
  }

  render() {
    let item = this.props.item
    console.log(item)
    return (
        <div>
            <h1>Item</h1>
            <li>{item.quantity} {item.name} available at {item.price} per item</li>
            <button onClick={this.buyItem}>BUY</button>
        </div>
      )
  }
}

export default observer(Item)