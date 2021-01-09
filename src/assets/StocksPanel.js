import React, { Component } from 'react'
import Stock from './Stock'

export default class StocksPanel extends Component {

    render() {
        return (
            <div className="stocks-panel">
                <ul>
                    {this.props.visibleStocks.map(stock =>           
                        <Stock key={stock.key} stockSymbol={stock.symbol} />
                    )}
                </ul>
            </div>
        )
    }
}

