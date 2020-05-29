import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/layouts/Navbar';

import Cars from './components/cars/Cars'
import Axios from 'axios'
import About from './components/pages/About'
import FilterCars from './components/cars/FilterCars'
import FilteredCars from './components/cars/FilteredCars'
import PostCar from './components/cars/PostCar'

class App extends Component  {
  state={
    transactions:[],
    filteredTransaction:{}
  }

  state2={
    "name":"CAR14",
    "manufacturer":"Jaguar",
    "model":"Series 8",
    "colour":"Black",
    "owner":"Digvijay"
  }

  // async componentDidMount(){
   
  //   const response=await  Axios.get('http://localhost:8080/getCars')
  //   console.log(response.data)
  //   this.setState({transactions:response.data})
  // }
  
  onClick=async (e)=>{
    e.preventDefault();
    const response=await Axios.get('http://localhost:8080/getCars')
   
    this.setState({transactions:response.data})
    this.setState({filteredTransaction:{}})
    
 
  }

  filterCarsbyKey=async text=>{
    this.setState({transactions:[]})
    console.log(text)
    const response=await Axios.get(`http://localhost:8080/queryCar?key=${text}`)
    this.setState({filteredTransaction:response.data}) 
    }
  
  render(){
  return(
    <Router>
    <div className="App">
       <Navbar title='FAB CAR'/>
     
      <Switch>
        <Route exact path='/' render={props=>(
          <Fragment>
             <FilterCars filterCarsbyKey={this.filterCarsbyKey} />
             <button type='submit' value='search' className='btn btn-dark btn-block' onClick={this.onClick}>Get all transactions records</button>
             <Cars transactions={this.state.transactions}/>
             <FilteredCars filteredTransaction={this.state.filteredTransaction}/>
          </Fragment>
        )}/>
        <Route exact path='/newTransaction' component={PostCar}/>
        <Route exact path='/about' component={About}/>

      </Switch>
   
    
   
    </div>
    </Router>
  )
};
}


export default App;
