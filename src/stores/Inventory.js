import { computed, observable, action, makeObservable } from 'mobx'
import { Item } from './Item'

export class Inventory {
    constructor() {
        this.list = [];
        this.length = 0;

        makeObservable(this, {
            list: observable,
            length: observable,
            addItem: action,
            buyItem: action,
            changePriceOfItem: action,
            numItems: computed
        })

    }

    get numItems() {
        return this.list.length
    }

    addItem = (name, price, quantity) => {
        let item = this.list.find(i => (i.name).toLowerCase() === (name).toLowerCase())
        let newItem = new Item(name, price, quantity)

        item ? item.quantity +=quantity : this.list.push(newItem)
    }
    buyItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.quantity -= 1
        let itemIndex = this.list.indexOf(item) //indexOf(item)
        if(item.quantity < 1) {
            this.list.splice(itemIndex, 1)
        }
    }
    changePriceOfItem = (name, price) => {
        let item = this.list.find(i => i.name === name)
        item.price = price
    }
}