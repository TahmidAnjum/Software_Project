import React from 'react'
import {Link} from 'react-router-dom';
//import axios from 'axios';


const Navbar = () =>
{
    
    return(

        <div className="Tahmid">
            <div className="Anjum">
                <span><Link className="anjum" to='/'>Home</Link></span>
                <span><Link className="anjum" to='/aboutus'>About Us</Link></span>
                <span><Link className="anjum" to='/login'>Login</Link></span>
            </div>
            <div className="NewAnj">
                <h1><p>Welcome to Outcome Based Learning</p></h1>
                <h1><p>Your experience begins here. </p></h1>
                <div><Link className="Start" to='/login'>Start Here&#10148;</Link></div>
            </div>
        </div>
    );
}

export default Navbar;