import React, { Component } from 'react'

export class FilteredCars extends Component {
    render() {
        return (
            <div>
                  <div className='card text-center'>
                <h1>{this.props.filteredTransaction.make}</h1>
                <p>  {this.props.filteredTransaction.model}</p>
                <p> {this.props.filteredTransaction.colour}</p>
                <p>  {this.props.filteredTransaction.owner}</p>
                
            </div>
            </div>
        )
    }
}

export default FilteredCars
