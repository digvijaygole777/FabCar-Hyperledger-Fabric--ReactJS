import React, { Component } from 'react'

export class CarsItem extends Component {

  
    render() {
       
        return (
            <div className='card text-center'>
                <h1>{this.props.transactions.make}</h1>
                <p>Model: {this.props.transactions.model}</p>
                <p>Color: {this.props.transactions.colour}</p>
                <p>Owner: {this.props.transactions.owner}</p>
                
            </div>
        )
    }
}

export default CarsItem
