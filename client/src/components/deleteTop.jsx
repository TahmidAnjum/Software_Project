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
        (async()=>{
            const req = {uids : topics['uids']}
            const {data} = await axios.post("http://localhost:5000/delTopic", req);
            console.log(data);
        })();
    }

    render() { 
        const {topics} = this.state;
        console.log("render",topics);
        const crs = jwtDecode(localStorage.getItem("Course"));
        const tpcs = jwtDecode(localStorage.getItem("Topics"));
         
        return ( 
            <div className="wrapper">
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
                        
                        
                        <div   >
                        <select className="multiselect" value={topics.uid} multiple onChange={this.handleChange} type="text" name="uids" searchable="Search here.." id="selectTab">
                        <option value="" disabled >Choose Topics to delete</option>
                        {tpcs.map(course=>
                            <option key={course.uid} value={course.uid}> {course.name} </option>
                        )}
                        </select>
                        </div>

                        
                        
                    
                        
                        
                        
                            
                        </form>
                        <div><button onClick={this.handleSubmit}>delete</button></div>
                    </div>
               </div>
            </div>
        );
    }
}
 
export default delTop;