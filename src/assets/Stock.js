import React, { Component } from 'react'
import axios from 'axios'


export class Stock extends Component {
    state = {
        stock: [],
        hasLoaded: false
    }
    
    componentDidMount() {
        axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + this.props.stockSymbol + "&apikey=MFBETSKQD126AMHH")
        .then(res => this.setState({stock: res.data}));
        this.setState({hasLoaded: true});
    }
    function stockData(){
        if(!this.state.hasLoaded){
            return(<p>Loading Data</p>);
        };
                   
        return(
            <p>Name:{this.props.stockSymbol}</p>
        );    
    }
    
    render() {
        
        return (
            <div className="stock">
                {stockData}
            </div>
        );
    }
}

export default Stock
