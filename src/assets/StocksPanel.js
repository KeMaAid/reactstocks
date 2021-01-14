import React, { Component } from 'react'
import Stock from './Stock'

export default class StocksPanel extends Component {

    render() {
        return (
            <ul className="StocksPanel">
                {this.props.visibleStocks.map(stock =>           
                    <Stock key={stock.key} stockSymbol={stock.symbol} placeholder="Search here"/>
                )}
            </ul>
        )
    }
}

