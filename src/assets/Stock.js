import React, { Component } from 'react'
import axios from 'axios'
import { LineSeriesCanvas, XYPlot } from 'react-vis';

const processData = (data) => {
            return data.map(e => ({
              x: e["4. close"],
              y: e
            }));
          };

export class Stock extends Component {
    state = {
        rawData: null,
        hasLoaded: false,
        test: [
            {x: 0, y: 8},
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 3, y: 9},
            {x: 4, y: 1},
            {x: 5, y: 7},
            {x: 6, y: 6},
            {x: 7, y: 3},
            {x: 8, y: 2},
            {x: 9, y: 0}
          ]
    }
    
    componentDidMount() {
        axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + this.props.stockSymbol + "&apikey=MFBETSKQD126AMHH")
        .then(res => this.setState({rawsData: res.data}));
        this.setState({hasLoaded: true});



    }
    
    stockData(){
        if(!this.state.hasLoaded){
            return(<p>Loading Data</p>);
        }if (this.state.hasLoaded) {
            return(
                <ul>
                    {this.state.stock["Meta Data"["2. Symbol"]]}
                </ul>
            )    
        }; 
        
                   
         
    }
    
    render(){
        
        return (
            <div className="stock">
                <h1>Name: {this.props.stockSymbol}</h1>
                
                {this.stockData}
                
                <XYPlot height={200} width={200}>
                    <LineSeriesCanvas data={test} />
                </XYPlot>
                
            </div>
        );
    }
}

export default Stock
