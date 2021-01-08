import React, { Component } from 'react'
import Stock from './Stock'

export default class StocksPanel extends Component {
    
    render() {
        const stockSymbol = 'IBM';
        return (
            <div>
            <Stock stockSymbol={stockSymbol}/>
            </div>
        )
    }
}

