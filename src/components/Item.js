import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import '../App.css'
class Item extends Component {

    buyItem = () => {
        this.props.store.buyItem(this.props.item.name)
    }

    editPrice = (e) => {
        if(e.detail === 2) {
            console.log("double click");
            let userInputPrice = prompt(`Please enter the new price for ${this.props.item.name}`, "");
            this.props.store.changePriceOfItem(this.props.item.name, userInputPrice)

        }
    }

    render() {
        let item = this.props.item
        return (
            <div>
                <h1>Item</h1>
                <li>{item.quantity} {item.name} available at
                <span onClick={this.editPrice}> {item.price}</span> per item</li>
                <button onClick={this.buyItem}>BUY</button>
            </div>
        )
    }
}

export default inject("store", "Item")(observer(Item))