import React, { Component } from 'react'
import Item from './Item'
import { observer, inject } from 'mobx-react'

class Market extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            price: 0,
            quantity: 0
        }
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    addItem = () => {
        this.props.store.addItem(this.state.name, parseInt(this.state.price), parseInt(this.state.quantity))
        this.setState({name: "", price: 0, quantity: 0})
    }

    render() {
        return (
            <div>
                <h1>Market:</h1>
                <input
                    name="name"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder="Add new Item"
                />
                <input
                    name="price"
                    type="number"
                    onChange={this.handleChange}
                    value={this.state.price}
                    placeholder="Item Price"
                />
                <input
                    name="quantity"
                    type="number"
                    onChange={this.handleChange}
                    value={this.state.quantity}
                    placeholder="Quantity of Item"
                />
                <button onClick={this.addItem}>Add</button>
                <h2>Total Items: {this.props.store.numItems}</h2>
                {this.props.store.list.map(i => <Item key={i.name} item={i} store={this.props.store}/>)}
            </div>
        )
    }
}

export default inject("store")(observer(Market))