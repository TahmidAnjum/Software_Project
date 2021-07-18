import React, { Component } from 'react'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
class Topic extends Component {
    state = {
        topics :[]
    }

    componentDidMount()
    {
        //console.log('i was here')
        const gg = localStorage.getItem("anjum");
        //console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        const ee = localStorage.getItem("Course");
        const ff = jwtDecode(ee);
        //const val = {title : '', year :'' }

        (async()=>{
            let {data : topics} = await axios.post("http://localhost:5000/teacher/"+pp.name+"/"+ff.title+"/"+ff.year,ff);
            this.setState({topics})
            //console.log(topics);
        })().catch((e)=>{console.log(e)});;
    }
    render() { 
        return (
            <div>
                {this.state.topics.map(course=>
                <div key={course.uid}> 
                    <span className="badge m-2 bg-warning">{course.name}</span>  
                </div>)}
            </div>
          );
    }
}
 
export default Topic;