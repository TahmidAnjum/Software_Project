import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Teachside from './teachside';
class Feedback extends Component {
    state = { 
        courses : []
     }
    
    handle =(o,c) =>{

    }
    
    gettoken = async() => {
        const ans = await localStorage.getItem("feed");
        return ans;
    }

    getCourse = async(e) =>
    {
        const ans = axios.post("http://localhost:5000/coursebyid",e);
        return ans;
    }

    render() { 
        const feedtkn = localStorage.getItem("feed");
        const feed = jwtDecode(feedtkn);
        
        //console.log(feed);
        return ( 
        <div className="frap">
            <Teachside history={this.props.history}/>
            <div className="black"><h1><p>Feedbacks</p></h1>
            <div className="blackz">
            {
                feed.map(cns=>
                    <div key={cns.info.uid} className="FeedCourse">
                        <h3><p>{cns.course.title} : {cns.course.name}</p></h3>
                        <br />
                        <p>{cns.info.description}</p>
                    </div>
                    )
            }
            </div>
            
            </div>

        </div> );
    }
}
 
export default Feedback;