import React, { Component } from 'react'
import axios from 'axios'


export class Stock extends Component {
    state = {
        stock: []
    }
    componentDidMount() {
        axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + this.props.stockSymbol + "&apikey=MFBETSKQD126AMHH")
        .then(res => this.setState({stock: res.data}))
    }
    
    render() {
        
        return (
            <div>
                <p>{this.props.stockSymbol}</p>
            </div>
        )
    }
}

export default Stock
