import { observable, action, makeObservable } from 'mobx'
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
            changePriceOfItem: action
        })

    }

    addItem = (name, price, quantity) => {
        let item = this.list.find(i => i.name === name)
        item ? item.quantity +=1 : this.list.push(item)
    }
    buyItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.quantity -= 1
        let itemIndex = this.list.indexOf(item) //indexOf(item)
        if(item.quantity == 0) {
            this.list.splice(itemIndex, 1)
        }
    }
    changePriceOfItem = (name, price) => {
        let item = this.list.find(i => i.name === name)
        item.price = price
    }
}