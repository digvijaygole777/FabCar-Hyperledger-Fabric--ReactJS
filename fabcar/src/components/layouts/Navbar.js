import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
 

const  Navbar =({title})=> {
   
        return (
          <nav className='navbar bg-primary'>
          <Link to='/'>{title}</Link>
         <ul>
           
           <li>
             <Link to='/newTransaction'>Add new Transaction</Link>
           </li>
           <li>
             <Link to='/about'>About</Link>
           </li>
         </ul>
        </nav>
        )
    
}
Navbar.defaultProp={
    title:'Fabcar'
  }

Navbar.propTypes={
    title:PropTypes.string.isRequired
  }

export default Navbar


