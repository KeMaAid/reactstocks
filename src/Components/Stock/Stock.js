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
        let stockChartCloseValuesFunction = [];
        let stockChartOpenValuesFunction = [];
        let stockChartHighValuesFunction = [];
        let stockChartLowValuesFunction = [];

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
                        stockChartCloseValuesFunction.push(data['Time Series (Daily)'][key]['4. close']);
                        stockChartOpenValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                        stockChartHighValuesFunction.push(data['Time Series (Daily)'][key]['2. high']);
                        stockChartLowValuesFunction.push(data['Time Series (Daily)'][key]['3. low']);
                    }
                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartCloseValues: stockChartCloseValuesFunction,
                        stockChartOpenValues: stockChartOpenValuesFunction,
                        stockChartHighValues: stockChartHighValuesFunction,
                        stockChartLowValues: stockChartLowValuesFunction,
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
                        x:this.state.stockChartXValues,
                        
                        Open:this.state.stockChartOpenValues,
                        Close:this.state.stockChartCloseValues,
                        High:this.state.stockChartHighValues,
                        Low:this.state.stockChartLowValues,
                        
                        type:"ohlc",
                        yaxis:"y",
                        xaxis:"x",
                    },
                    /* {
                        x: this.state.stockChartXValues,
                        y: this.state.stockChartCloseValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                        name:"Close",
                    },
                    {
                        x: this.state.stockChartXValues,
                        y: this.state.stockChartOpenValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'blue'},
                        name:"Open",
                    },
                    {
                        x: this.state.stockChartXValues,
                        y: this.state.stockChartHighValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'green'},
                        name:"High",
                    },
                    {
                        x: this.state.stockChartXValues,
                        y: this.state.stockChartLowValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'yellow'},
                        name:"Low",
                    }, */
                    
                ]}
                layout={{
                    autocolorscale: true,
                    autoscale: true,
                    autosize: true,
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