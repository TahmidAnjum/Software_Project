import React, { Component } from 'react'
//import { Link} from 'react-router-dom'
import axios from 'axios';
//import dumms from './dummies'
//import '../css files/login.css';
//import { Button } from 'bootstrap';

const sign = require('jwt-encode');
const secret = 'secret';


class Login extends Component {
    state = {
        account :{
            email : '',
            password : ''
        },
        path : '/teacher'
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
            const {status,data} = await axios.post("http://localhost:5000/login", this.state.account);
            //var path = {...this.state.path};
            if(status!==404) 
            {   console.log("login",data);
                const jwt = sign(data,secret);
                localStorage.setItem("anjum",jwt);
                let role;
                const name = data.name;
                const mArr = this.state.account.email.split('@');
                if(mArr.length>1)
                {
                    this.props.history.push('/teacher/'+name);
                    role = {as :"teacher"};
                }
                else
                {
                    this.props.history.push('/student/'+name+'/'+data.student_id);
                    role = {as :"student"};
                }
                const enRole = sign(role,secret);
                localStorage.setItem("role",enRole);
            }
            else{
                this.props.history.push('/')
            }
            //this.setState({path});
        })().catch((e)=>{console.log(e)});;
    }

    render() { 
        const {account} = this.state;
        return (
            <div className="login">
                <h2 className="active"> sign in </h2>
                <form action="" onSubmit={this.handleSubmit}>
                    <div>
                        <input className="text" value={account.email} onChange={this.handleChange} type="text" name="email" id="" />
                    </div>
                    
                    <div>
                        <input className="text" value={account.password} onChange={this.handleChange} type="password" name="password" id="" />
                    </div>
                    <div>
                        <button className="signin" onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
                
            </div>
          );
    }
}
 
export default Login;