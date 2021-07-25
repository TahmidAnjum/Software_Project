import React, { Component } from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import Teachside from './teachside'
class delTop extends Component {
    state = { 
        topics :{
            course :'',
            year :'',
            uids :[]
        }
    }

    componentWillUnmount = () =>{
        
        console.log("unmounted add", localStorage);
    }
    
    handleChange = e =>
    {
        const topics = {...this.state.topics};
        const tkn = localStorage.getItem("Course");
        const crs = jwtDecode(tkn);
        topics['course'] = crs.title;
        topics['year'] = crs.year;
        topics[e.currentTarget.name].push(e.currentTarget.value);
        let arr = [...new Set(topics[e.currentTarget.name])];
        topics[e.currentTarget.name] = arr;
        (async ()=>{
            await this.setState({topics});
            console.log(this.state);
        })();
    }

    handleSubmit = e =>
    {
        const topics = {...this.state.topics};
        
        const tpcToken = localStorage.getItem("anjum");
        const pp = jwtDecode(tpcToken);
        (async()=>{
            const req = {uids : topics['uids']}
            const {data} = await axios.post("http://localhost:5000/delTopic", req);
            console.log(data);
        })();
        this.props.history.push("/teacher/"+pp.name+"/seetopics");
            
    }

    getCourse = async() =>{
        const ee = await localStorage.getItem("Course");
        const ff = jwtDecode(ee);
       return ff;
    }
    
    getTopics = async() =>{
        const ee = await localStorage.getItem("Topics");
        const ff = jwtDecode(ee);
       return ff;
    }

    render() { 
        const {topics} = this.state;
        console.log("render",topics);
        const crstoken = localStorage.getItem("Course");
        const crs = jwtDecode(crstoken);
        const tpcToken = localStorage.getItem("Topics");
        const tpcs = jwtDecode(tpcToken);
         
        return ( 
            <div className="frap">
                <Teachside history={this.props.history}/> 
                <div className="delTopic">
                    <div>
                        <div>
                            <h1><p>Course Title : {crs.title}</p></h1>
                        </div>
                        
                        <div>
                            <h1><p>Name : {crs.name}</p></h1>
                        </div>
                        
                        <div>
                            <h1><p>Year : {crs.year}</p></h1>
                        </div>
                        
                        <form className="Delform" action="" onSubmit={this.handleSubmit}>   
                            
                        <div>
                        <h1><p>Topic Name :</p></h1>
                        </div>
                        
                        
                        <div className="col-md-12"  >
                        <select className="form-select" value={topics.uid} multiple onChange={this.handleChange} type="text" name="uids" searchable="Search here.." id="selectTab">
                        <option value="" disabled >Choose Topics to delete</option>
                        {tpcs.map(course=>
                            <option key={course.uid} value={course.uid}> {course.name} </option>
                        )}
                        </select>
                        </div>

                        
                        
                    
                        
                        
                        
                            
                        </form>
                        <div><button className="signin" onClick={this.handleSubmit}>delete</button></div>
                    </div>
               </div>
            </div>
        );
    }
}
 
export default delTop;