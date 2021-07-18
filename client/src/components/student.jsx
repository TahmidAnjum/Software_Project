import React, { Component } from 'react'
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
class Student extends Component {
    //state = {  }
    render() { 
        const gg = localStorage.getItem("anjum");
        console.log('student',jwtDecode(gg));
        return ( 
            <div className="stdNav">
                <span><Link className="anjum" to="">Courses</Link></span>
                <span><Link className="anjum" to="">Feedback</Link></span>
                <span><Link className="anjum" to="">Grades</Link></span>
                <span><Link className="anjum" to="">logout</Link></span>

            </div>
         );
    }
}
 
export default Student;