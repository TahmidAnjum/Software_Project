import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';

class giveFeed extends Component {
    state = { 
        feedback :{
            course : '',
            teacher : '',
            teachers : [],
            description : ''
        }
    }

    handleChange = e =>{
        const feedback = {...this.state.feedback};
        feedback[e.currentTarget.name] = e.currentTarget.value;
        if(e.currentTarget.name==="course")
        {
            
            const req = {uid : parseInt(e.currentTarget.value)};
            console.log("aj");
            //let arr = [];
            (async()=>{
               //const st = ['anjum' ,'14'];
                const {data:teachers} = await axios.post("http://localhost:5000/getTeacher", req);
                console.log(teachers);
                //console.log(e.currentTarget.value);
                feedback['teachers'] = teachers;
                //
                this.setState({feedback});
                //console.log(this.state.feedback);
               //var path = {...this.state.path};
               //console.log(data);
               //this.props.history.push("/teacher/"+pp.name+"/seetopics");
           })().catch((e)=>{console.log(e)});;
        }
        else
        {
            this.setState({feedback});
        }
        
    }

    handleSubmit = e =>{
        e.preventDefault();
        const gg = localStorage.getItem("anjum");
        const ff = jwtDecode(gg);
        const feedback = {...this.state.feedback}
        const req = {suid  : ff.uid, tuid : parseInt(feedback.teacher), cuid:parseInt(feedback.course), description : feedback.description};
        console.log(req);
        (async()=>{
            await axios.post("http://localhost:5000/givefeed", req);
        })();
        this.props.history.push('/'+ff.name+'/'+ff.student_id);
    }

    render() { 
        console.log("Feed");
        const crstkn = localStorage.getItem("Courses");
        //const courses = [];
        const crs = jwtDecode(crstkn);
        const {teachers,description} = this.state.feedback;
        console.log(this.state.feedback);
        return (
            <div>
                <form action="">
                    <p>Choose Course</p>
                    <div className="col-md-12">
                    <select className="form-select"  name="course" onChange={this.handleChange}id="">
                        <option> Choose Course</option>
                    {crs.map(course=>
                        <option key={course.uid} value={course.uid} id="anjum" > {course.name} </option>
                    )}
                    </select>
                    </div>
                    <div className="col-md-12">
                    <select className="form-select" name="teacher"  onChange={this.handleChange}id="">
                    <option> Choose Teacher</option>

                    {teachers.map(course=>
                        <option key={course.uid} value={course.uid} id="anjum" > {course.name} </option>
                    )}
                    </select>
                    </div>
                    <p>Description</p>
                    <div><input type="text" value={description} onChange={this.handleChange} name="description"/></div>
                    <button onClick={this.handleSubmit}> Submit</button>
                </form>
            </div>
          );
    }
}
 
export default giveFeed;