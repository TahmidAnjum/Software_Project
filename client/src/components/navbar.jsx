import React from 'react'
import {Link} from 'react-router-dom';
//import axios from 'axios';


const Navbar = () =>
{
    return(
        <ul className=".anjum">
            <li><Link className=".anjum" to='/'>Home</Link></li>
            <li><Link className=".anjum" to='/login'>In</Link></li>
            <li><Link className=".anjum" to='/logout'>Out</Link></li>
            <li><Link className=".anjum" to='/teacher'>Teach</Link></li>
        </ul>
    );
}

export default Navbar;