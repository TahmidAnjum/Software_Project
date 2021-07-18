import React, { Component } from 'react'
import axios from 'axios';
import sign from 'jwt-encode';
import jwtDecode from 'jwt-decode';
const secret = 'secret';
//import Topic from './topic';
class Course extends Component {
    
    takeCour = () =>
    {
        const gg = localStorage.getItem("anjum");
        //console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        const ee = localStorage.getItem("Course");
        const ff = jwtDecode(ee);
        this.props.history.push("/teacher/"+pp.name+"/"+ff.title+"/"+ff.year+"/topics");
    }

    addTopic = () =>
    {
        const gg = localStorage.getItem("anjum");
        //console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        const ee = localStorage.getItem("Course");
        const ff = jwtDecode(ee);
        (async()=>{
            const {data:kk} = await axios.post("http://localhost:5000/getCO",ff);
            const qus = sign(kk,secret);
            localStorage.setItem("COs",qus);
        })().catch((e)=>{console.log(e)});
        (async()=>{
            const {data : po} = await axios.get("http://localhost:5000/po");
            const pus = sign(po,secret);
            localStorage.setItem("POs",pus);
        })().catch((e)=>{console.log(e)});
        this.props.history.push("/teacher/"+pp.name+"/"+ff.title+"/"+ff.year+"/addtopics");
    }
    
    delTopic = () =>
    {
        const gg = localStorage.getItem("anjum");
        //console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        const ee = localStorage.getItem("Course");
        const ff = jwtDecode(ee);
        (async()=>{
            const {data:kk} = await axios.post("http://localhost:5000/getTopic",ff);
            const qus = sign(kk,secret);
            localStorage.setItem("Topics",qus);
        })().catch((e)=>{console.log(e)});
        this.props.history.push("/teacher/"+pp.name+"/"+ff.title+"/"+ff.year+"/deltopics");
    }
    

    hanQues  = () =>
    {
        const gg = localStorage.getItem("anjum");
        //console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        const ee = localStorage.getItem("Course");
        const ff = jwtDecode(ee);
        this.props.history.push("/teacher/"+pp.name+"/"+ff.title+"/"+ff.year+"/question");
    }

    modCour = () =>
    {
        const gg = localStorage.getItem("anjum");
        //console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        const ee = localStorage.getItem("Course");
        const ff = jwtDecode(ee);
        (async()=>{
            const {data:kk} = await axios.post("http://localhost:5000/delreqs",ff);
            const qus = sign(kk,secret);
            localStorage.setItem("delTopics",qus);
        })().catch((e)=>{console.log(e)});
        this.props.history.push("/teacher/"+pp.name+"/"+ff.title+"/"+ff.year+"/delTopc");
    }
    
    grade = () =>
    {
        
    }


    modQues = () =>
    {
        const gg = localStorage.getItem("anjum");
        //console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        const ee = localStorage.getItem("Course");
        const ff = jwtDecode(ee);
        this.props.history.push("/teacher/"+pp.name+"/"+ff.title+"/"+ff.year+"/question");
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.takeCour}>See Topics</button>
                <button onClick={this.addTopic}>Add Topic</button>
                <button onClick={this.delTopic}>Delete Topic</button>
                <button onClick={this.hanQues}>Set Question</button>
                <button onClick={this.modQues}>Moderate Question</button>
                <button onClick={this.modCour}>Moderate Course</button>
                <button onClick={this.grade}>Grade Answer</button>
            </div>
         );
    }
}
 
export default Course;
