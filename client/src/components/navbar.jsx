import React from 'react'
import {Link} from 'react-router-dom';
//import axios from 'axios';


const Navbar = () =>
{
    return(
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>In</Link></li>
            <li><Link to='/logout'>Out</Link></li>
            <li><Link to='/teacher'>Teach</Link></li>
        </ul>
    );
}

export default Navbar;