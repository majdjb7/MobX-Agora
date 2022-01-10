import React, { Component } from 'react'
import Item from './Item'
import { observer } from 'mobx-react'

class Market extends Component {
    render() {
        console.log(this.props.store)
        return (
            <div>
                <h1>Market:</h1>
                {this.props.store.list.map(i => <Item item={i} store={this.props.store}/>)}
            </div>
        )
    }
}

export default observer(Market)