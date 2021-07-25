import React, { Component } from 'react'
import Teachside from './teachside';
import Profile from './profile';
//import axios from 'axios';
//import jwtDecode from 'jwt-decode';
////import { Link } from 'react-router-dom';
////import crs from './course';
//
//const sign = require('jwt-encode');
//const secret = 'secret';
//import Msd from 'multiselect-react-dropdown';
//import { Link } from 'react-router-dom'


class Teacher extends Component {
    render()
    {
        return(
            <div className="frap">
                <Teachside history={this.props.history}/>
                <Profile/>
            </div>
        )
    }
    
    
    /*  
    componentDidMount()
    {
        const gg = localStorage.getItem("anjum");
        //console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        
        (async()=>{
            let {data : courses} = await axios.post("http://localhost:5000/teacher/"+pp.name,pp);
            this.setState({courses})
            console.log(courses);
        })().catch((e)=>{console.log(e)});;
    }  
    handleEv = c =>{
        const gg = localStorage.getItem("anjum");
        //console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        const ee = sign(c,secret);
        localStorage.setItem("Course",ee);
        
        this.props.history.push("/teacher/"+pp.name+"/"+c.title+"/"+c.year+"/");
        console.log(ee);
    }
    render() { 
        const gg = localStorage.getItem("anjum");
        //console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        
        return(
            <div>
                {this.state.courses.map(course=> 
                <div key={course.uid} className="gg"> 
                    <Link to={`/teacher/${pp.name}/${course.title}/${course.year}` } onClick={()=>this.handleEv(course)}><span className="badge m-2 bg-warning">{course.title}</span>  {course.name}  {course.year} </Link>
                </div>)}
            </div>
        );
        /*return ( 
<Route path="/teacher/:name/:mane/:year" component={crs}/>
{this.state.courses.map(course=> 
                <p key={course.uid}>
                    {course.title} : {course.name}
                </p>
                )}

            <div class="col-md-12">

                    <select className="mdb-select colorful-select dropdown-primary md-form" multiple searchable="Search here..">
                    <option value="" disabled selected>Choose your country</option>
                    <option value="1">USA</option>
                    <option value="2">Germany</option>
                    <option value="3">France</option>
                    <option value="4">Poland</option>
                    <option value="5">Japan</option>
                    </select>
                    <label className="mdb-main-label">Label example</label>
                    <button className="btn-save btn btn-primary btn-sm">Save</button>

                </div>
            <div>

                <select className="form-select form-select-lg mb-3" aria-multiselectable>
                    <option selected>Open this select menu</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <span className="badge m-2 bg-primary">
                    
                        Courses
                    
                </span>
                <span className="badge m-2 bg-primary">
                    
                        Settings
                    
                </span>
                <span className="badge m-2 bg-primary">
                    
                        Forum
                    
                </span>
                <span className="badge m-2 bg-primary">
                    
                        Links
                    
                </span>
            </div>
         );
    }*/
}
 
export default Teacher;
