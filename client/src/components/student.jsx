import React, { Component } from 'react'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
//import { button } from 'react-router-dom';
//import Profile from './profilestd';
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
            await localStorage.setItem("Courses",tt);
            this.props.history.push(`/student/${pp.name}/${pp.student_id}/givefeed`)
        })();
        
    }

    home= () =>{
        const gg = localStorage.getItem("anjum");
        //console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        this.props.history.push(`/student/${pp.name}/${pp.student_id}`)
    }
    grades = ()=>
    {
        const gg = localStorage.getItem("anjum");
        const pp = jwtDecode(gg);
        this.props.history.push(`/student/${pp.name}/${pp.student_id}/viewgrades`)
    }


    cour = () =>
    {
        const gg = localStorage.getItem("anjum");
          ////console.log('teacher',jwtDecode(gg));
          const pp = jwtDecode(gg);
          (async()=>{
                let {data : courses} = await axios.post("http://localhost:5000/crsstd",pp);
                //this.setState({courses});
                console.log(courses);
                const jwt = sign(courses,secret);
                await localStorage.setItem("Courses",jwt);
                //const jwt1 = sign("topics",secret);
                //localStorage.setItem("Option",jwt1);
                //console.log(jwt1);
                this.props.history.push(`/student/${pp.name}/${pp.student_id}/seetopics`);
            })().catch((e)=>{console.log(e)});
    }
    logout = ()=>
    {
        localStorage.clear();
        console.log(localStorage);
        this.props.history.push("/");
    }
    render() { 
        const gg = localStorage.getItem("anjum");
        //const pp = jwtDecode(gg);
        console.log('student',jwtDecode(gg));
        return ( 
            <div className="stdNav">
                <span><button className="anj" onClick={this.home}>Home</button></span>
                <span><button className="anj" onClick={this.cour}>Courses</button></span>
                <span><button className="anj" onClick={this.feedback}>Feedback</button></span>
                <span><button className="anj" onClick={this.grades}>Grades</button></span>
                <span><button className="anj" onClick={this.logout}>logout</button></span>
            </div>
         );
    }
}
 
export default Student;