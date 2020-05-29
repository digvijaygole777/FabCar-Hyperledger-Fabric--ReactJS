import React, { Component } from 'react'
import Axios from 'axios'

 class PostCar extends Component {
     state={
        name:'',
        manufacturer:'',
        model:'',
        colour:'',
        owner:'',
        message:''
     }

    onChangeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    } 

    onSubmitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
         
        Axios.post('http://localhost:8080/postCar',this.state,{
            headers:{
                "Access-Control-Allow-Origin":"*",
                "Access-Control-Allow-Methods":"POST,GET",
            }
        }).then(res=>{
            console.log(res)
        }).catch(error=>{
            console.log(error)
        })
        this.setState({message:'Transaction has been successfully added'})
    
    }

    render() {
        const {name,manufacturer,model,color,owner}=this.state
        return (
            <div>
               <h1>Enter Your Transaction Details</h1> 

               <form onSubmit={this.onSubmitHandler}>      
                <input name="name" type="text"  placeholder="Name" value={name} required='true' onChange={this.onChangeHandler} />   
                <input name="manufacturer" type="text" placeholder="manufacturer" value={manufacturer} required='true' onChange={this.onChangeHandler} />
                <input name="model" type="text"  placeholder="model" value={model} required='true' onChange={this.onChangeHandler}/> 
                <input name="colour" type="text"  placeholder="colour" value={color} required='true' onChange={this.onChangeHandler} /> 
                <input name="owner" type="text"  placeholder="owner" value={owner} required='true' onChange={this.onChangeHandler} /> 
                <input type="submit" value="SUBMIT" className='btn btn-dark btn-sm my1'/>
                <h2>{this.state.message}</h2>
                </form>
             </div>
        )
    }
}

export default PostCar
