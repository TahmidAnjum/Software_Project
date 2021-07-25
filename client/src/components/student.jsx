import React, { Component } from 'react'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Profile from './profilestd';
import sign from 'jwt-encode';
const secret = 'secret';
class Student extends Component {
    //state = {  }

    feedback = () =>
    {
        const gg = localStorage.getItem("anjum");
       //console.log('teacher',jwtDecode(gg));
       const pp = jwtDecode(gg);
        (async ()=>{
            const {data} = await axios.post("http://localhost:5000/stdcourses", pp);
            //console.log(data);
            const tt = sign(data,secret);
            localStorage.setItem("Courses",tt);
        })();
    }
    logout = ()=>
    {
        localStorage.clear();
        console.log(localStorage);
        //this.props.history.push("/");
    }
    render() { 
        const gg = localStorage.getItem("anjum");
        const pp = jwtDecode(gg);
        console.log('student',jwtDecode(gg));
        return ( 
            <div className="stdNav">
                <span><Link className="anjum" to="">Courses</Link></span>
                <span><Link className="anjum" to={`/student/${pp.name}/${pp.student_id}/givefeed`} onClick={this.feedback}>Feedback</Link></span>
                <span><Link className="anjum" to="">Grades</Link></span>
                <span><Link className="anjum" to="/" onClick={this.logout}>logout</Link></span>
                <Profile/>
            </div>
         );
    }
}
 
export default Student;