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

    getStyle = () => {
        return {
            padding:'10px',
            border:'4px solid var(--base03)',
            borderRadius: '25px',
            background: '#5e5e5e',
            
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
                    console.log(data)

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
            <div style={this.getStyle()} className="Chart">
                
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
                    font: {color: '#fff'},
                    plot_bgcolor: '#5e5e5e',
                    paper_bgcolor: '#5e5e5e',
                    xaxis: {color: '#fff'},
                    yaxis: {color: '#fff'},
                    width: '600',
                    height: '450',
                    title: this.props.stockSymbol}}
                />
            </div>
        )
    }
        
}

export default Stock;