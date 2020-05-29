import React, { Component } from 'react'

export class FilterCars extends Component {
    state={
        text:''
    }

    onChange=(event)=>{
        this.setState({text:event.target.value})
    }

    onSubmit=(e)=>{
       
        e.preventDefault()
       
       this.props.filterCarsbyKey(this.state.text)
       
       this.setState({text:''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                  <input type='text' name='text' placeholder='Filter Transactions by id' value={this.state.text}
                  onChange={this.onChange}/>
                  <input type='submit' value='Filter Transactions' className='btn btn-dark btn-block'/>
              </form>   
            </div>
        )
    }
}

export default FilterCars
