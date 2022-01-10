import { observable, makeObservable } from 'mobx'

export class Item {

    constructor(name, price, quantity) {
        this.name = name
        this.price = 0
        this.quantity = 1

        makeObservable(this, {
            name: observable,
            price: observable,
            quantity: observable
        })
    }
}