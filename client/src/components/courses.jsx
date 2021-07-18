import jwtDecode from 'jwt-decode';
import sign from 'jwt-encode';
import axios from 'axios';
import Teachside from './teachside';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import imag from '../images/FIgmaPics/wp.png'

const secret = 'secret';

class Courses extends Component {
    state = { 
        courses : []
    }

    handle = (optn,course) =>
    {
        const crs = sign(course,secret);
        localStorage.setItem("Course",crs);
        if(optn==="addtopics")
        {
            //const gg = localStorage.getItem("anjum");
            //console.log('teacher',jwtDecode(gg));
            //const pp = jwtDecode(gg);
            //const ee = localStorage.getItem("Course");
            //const ff = jwtDecode(ee);
            (async()=>{
                const {data:kk} = await axios.post("http://localhost:5000/getCO",course);
                const qus = sign(kk,secret);
                localStorage.setItem("COs",qus);
            })().catch((e)=>{console.log(e)});
            (async()=>{
                const {data : po} = await axios.get("http://localhost:5000/po");
                const pus = sign(po,secret);
                localStorage.setItem("POs",pus);
            })().catch((e)=>{console.log(e)});
        }
        else if(optn==="deltopics")
        {
          (async()=>{
              const {data:kk} = await axios.post("http://localhost:5000/getTopic",course);
              const qus = sign(kk,secret);
              localStorage.setItem("Topics",qus);
          })().catch((e)=>{console.log(e)});
        }
        else if(optn==="moderatecourse")
        {
            //console.log("Here I am");
            (async()=>{
                const {data:kk} = await axios.post("http://localhost:5000/delreqs",course);
                console.log(kk);
                const qus = sign(kk,secret);
                localStorage.setItem("delTops",qus);
            })().catch((e)=>{console.log(e)});
            
            
            (async()=>{
                const {data:kk} = await axios.post("http://localhost:5000/getaddtop",course);
                console.log(kk);
                const qus = sign(kk,secret);
                localStorage.setItem("addTops",qus);
            })().catch((e)=>{console.log(e)});
        }
    }
    render() { 
        const gg = localStorage.getItem("anjum");
        ////console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        const ll = localStorage.getItem("Courses");
        const courses = jwtDecode(ll);
        const an = localStorage.getItem("Option");
        const optn = jwtDecode(an);
        //console.log(ans);
        return ( 
            <div className="wrapper">
                <Teachside history={this.props.history}/>
                <div className="Courses">
                {courses.map(course=> 
                
                <div key={course.uid} className="gg"> 
                    <div><img src={imag} alt="Avatar"  style={{width:'inherit', height: '100px' , overflow :'hidden'}} /></div>
                    <div className="ggV"><p><Link to={`/teacher/${pp.name}/${course.title}/${course.year}/${optn}`} onClick={()=>this.handle(optn, course)}>January {course.year} : {course.title} - {course.name}   </Link></p></div>
                </div>
                
                )}
                </div>
            </div>
        );
    }
}
 
export default Courses;