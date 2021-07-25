import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';
import pic from '../images/FIgmaPics/aaaaaa.png'
import Student from './student';
class stdprof extends Component {
    state = {
        teacher : jwtDecode(localStorage.getItem("anjum"))
    }
    render() { 
       //const teacher = jwtDecode(localStorage.getItem("anjum"));
       //const role = jwtDecode(localStorage.getItem("role"));
       //console.log(this.state);
       //this.setProf(teacher,"");
       const {teacher} = this.state;
        return ( 
            
                <div>
                    <Student history={this.props.history}/>
                    <div className="Proftest">
                    <div className="Profimg">
                        <img src={pic} alt="" />
                    </div>
                    <div className="Prof">
                        <pre>
                       <div><p>Name          : {teacher.name}</p></div>
                       <div><p>Roll          : {teacher.student_id}</p></div>
                       <div><p>Email         : {teacher.email}</p></div>
                       <div><p>Level         : {teacher.level}</p></div>
                       <div><p>Term          : {teacher.term}</p></div>
                       <div><p>Contact info  : 01xxxxxxxxx</p></div>
                       </pre>
                   </div>
                </div>
                </div>

         );
    }
}
 
export default stdprof;