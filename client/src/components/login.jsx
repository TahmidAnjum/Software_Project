import React, { Component } from 'react'
//import {Route, Switch, Link} from 'react-router-dom'
import axios from 'axios';
//import dumms from './dummies'
//import '../css files/dummy.css';
//import { Button } from 'bootstrap';

class Login extends Component {
    state = {
        account :{
            email : '',
            password : ''
        },
        path : ''
    }

    
    handleChange = e =>
    {
        const account = {...this.state.account};
        
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account});
    }

    handleSubmit = e =>
    {
        e.preventDefault();
        //console.log(this.state.account);
        (async()=>{
            //const st = ['anjum' ,'14'];
            const {status} = await axios.post("http://localhost:5000/login", this.state.account);
            var path = {...this.state.path};
            if(status!==404) 
            {    
                path = '/teacher'
            }
            else{
                path = '/login'
            }
            this.setState({path});
        })().catch((e)=>{console.log(e)});;
    }

    render() { 
        const {account} = this.state;
        return (
            <div>
                
                <form action="" onSubmit={this.handleSubmit}>
                    <div><input value={account.email} onChange={this.handleChange} type="text" name="email" id="" /></div>
                    <div><input value={account.password} onChange={this.handleChange} type="password" name="password" id="" /></div>
                    <div><button onClick={this.handleSubmit}>Submit</button></div>
                </form>
                
            </div>
          );
    }
}
 
export default Login;