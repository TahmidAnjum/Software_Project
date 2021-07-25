import jwtDecode from 'jwt-decode';
import React, { Component } from 'react'
import pic from '../images/FIgmaPics/aaaaaa.png'

 class Profile extends Component {
     state = {
         teacher :jwtDecode(localStorage.getItem("anjum"))
     }
     render() { 
        //const teacher = jwtDecode(localStorage.getItem("anjum"));
        //const role = jwtDecode(localStorage.getItem("role"));
        //console.log(this.state);
        //this.setProf(teacher,"");
        const {teacher} = this.state;
         return ( 
             
                 <div className="Proftest">
                     <div className="Profimg">
                         <img src={pic} alt="" />
                     </div>
                     <div className="Prof">
                         <pre>
                        <div><p>Name          : {teacher.name}</p></div>
                        <div><p>Designation   : {teacher.designation}</p></div>
                        <div><p>Email         : {teacher.email}</p></div>
                        <div><p>Contact info  : 01xxxxxxxxx</p></div>
                        </pre>
                    </div>
                 </div>

          );
     }
 }
  
 export default Profile;