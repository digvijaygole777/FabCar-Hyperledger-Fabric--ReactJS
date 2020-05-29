import React, { Component } from 'react'
import CarItem from './CarsItem'

export class Cars extends Component {

    render() {
        return (
            <div style={CarStyle}>
            {this.props.transactions.map(trans=>(
               
                  <CarItem key={trans.key} transactions={trans.Record}/>
                   
            ))}
            </div>
        )
    }
}
const CarStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    girdGap:'1rem'
}

export default Cars
