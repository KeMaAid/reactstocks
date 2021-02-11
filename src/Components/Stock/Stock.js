import React from 'react'

import Plot from 'react-plotly.js';
class Stock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: [],

        }
    }

    componentDidMount(){
        this.fetchStock();
    }

    fetchStock(){
        const pointerToThis = this;
        const API_Key = 'MFBETSKQD126AMHH';
        let StockSymbol = this.props.stockSymbol;
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&apikey=${API_Key}`
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(API_Call)
            .then(
                function(response){
                    return response.json();
                }
            )
            .then(
                function(data){

                    for(var key in data['Time Series (Daily)']){
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['4. close']);
                    }
                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    });
                }
            )
    }
    render(){
        return (
            <div className="Chart">
                
                <Plot 
                data={[
                    {
                        x: this.state.stockChartXValues,
                        y: this.state.stockChartYValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    
                ]}
                layout={{
                    autocolorscale: true,
                    autoscale: true,
                    font: {color: '#fff'},
                    plot_bgcolor: '#252525',
                    paper_bgcolor: '#252525',
                    margin: {
                        l: 40,
                        r: 10,
                        b: 20,
                        t: 80,
                        pad: 4
                    },
                    xaxis: {color: '#fff'},
                    yaxis: {color: '#fff'},
                    width:450,
                    height:300,
                    title: this.props.stockSymbol}}
                />
            </div>
        )
    }
        
}

export default Stock;