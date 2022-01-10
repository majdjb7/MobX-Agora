import React, { Component } from 'react'
import Item from './Item'
import { observer } from 'mobx-react'

export default class Market extends Component {
    render() {
        return (
            <div>
                <h1>Market:</h1>
                <Item />
            </div>
        )
    }
}
