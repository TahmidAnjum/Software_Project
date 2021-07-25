import React, { Component } from 'react'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Teachside from './teachside';
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
            
            this.setState({topics});

            //console.log(topics);
        })().catch((e)=>{console.log(e)});;
    }
    dumm= c=>{
        //console.log("anjum320");
    }
    render() { 
        return (
            <div className="frap">
                <Teachside history={this.props.history}/>
                <div className="Topics"><ol>
                {this.state.topics.map(course=>
                <li  key={course.uid}> 
                    <div ><u>{course.name}<br /></u>  <ol type='a'> <br />
                        {course.COs.map(co=>
                        <li>
                            
                                    <i>{co.name}</i> <ol type='i'> {co.POs.map(po=>
                                    
                                <li >
                                        {po.name}
                                </li>
                            )}<br /></ol>
                            
                        </li> 
                           
                        )} <br /> </ol> 
                    </div>  
                </li>
                )} <br /> </ol>
                </div>
            </div>
          );
    }
}
 
export default Topic;