import React, { Component } from 'react'
import Student from './student';
import jwtDecode from 'jwt-decode';
import imag from '../images/FIgmaPics/wp.png'
import sign from 'jwt-encode';
const secret = 'secret'
class stcrs extends Component {
    state = { 
        courses : []
    }

    handle = course =>{
        const crs = sign(course,secret);
        localStorage.setItem("Course",crs);
        const gg = localStorage.getItem("anjum");
          ////console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        console.log(course)
        this.props.history.push("/student/"+pp.name+'/'+pp.student_id+'/'+course.title+'/'+course.year+'/topics');
    }
    
    render() { 
        //const gg = localStorage.getItem("anjum");
        ////console.log('teacher',jwtDecode(gg));
        //const pp = jwtDecode(gg);
        const ll = localStorage.getItem("Courses");
        const courses = jwtDecode(ll);
        //const an = localStorage.getItem("Option");
        //const optn = 'bluff';
        //console.log(ans);
        return ( 
            <div>
                <Student history={this.props.history}/>
                <div className="Courses">
                {courses.map(course=> 
                
                <div key={course.uid} className="gg"> 
                    <div><img src={imag} alt="Avatar"  style={{width:'inherit', height: '100px' , overflow :'hidden'}} /></div>
                    <div className="ggV"><button className="Topbutt"onClick={()=>this.handle(course)}>January {course.year} : {course.title} - {course.name}</button></div>
                </div>
                
                )}
                </div>
            </div>
        );
    }
}
 
export default stcrs;