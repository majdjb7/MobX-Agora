import React, { Component } from 'react'
import Item from './Item'
import { observer } from 'mobx-react'

class Market extends Component {
    render() {
        return (
            <div>
                <h1>Market:</h1>
                {this.props.store.list.map(i => <Item key={i.name} item={i} store={this.props.store}/>)}
            </div>
        )
    }
}

export default observer(Market)