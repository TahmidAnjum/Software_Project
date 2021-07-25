import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';
import Student from './student';
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
        const {feedback} = this.state;
        if(feedback.course===''||feedback.teacher===''||feedback.description==='')
        {
            window.alert('The credentials are not full');
            return;
        }
        const gg = localStorage.getItem("anjum");
        const ff = jwtDecode(gg);
        //const feedback = {...this.state.feedback}
        const req = {suid  : ff.uid, tuid : parseInt(feedback.teacher), cuid:parseInt(feedback.course), description : feedback.description};
        console.log(req);
        (async()=>{
            await axios.post("http://localhost:5000/givefeed", req);
        })();
        window.alert("Submitted");
        //this.props.history.push('/student/'+ff.name+'/'+ff.student_id);
    }
    handleBack = e =>{
        e.preventDefault();
        const gg = localStorage.getItem("anjum");
        const ff = jwtDecode(gg);
        this.props.history.push('/student/'+ff.name+'/'+ff.student_id);
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
                <Student history={this.props.history}/>
            <div className="stdfeed">
                <h1 className="heer">Feedback</h1>
                <form action="">
                    
                    <div className="col-md-12">
                    <h1><p>Choose Course</p></h1>
                    <select className="form-select1"  name="course" onChange={this.handleChange}id="">
                        <option> Choose Course</option>
                    {crs.map(course=>
                        <option key={course.uid} value={course.uid} id="anjum" > {course.name} </option>
                    )}
                    </select>
                    </div>
                    <div className="col-md-12">
                    <h1><p>Choose Teacher</p></h1>
                    <select className="form-select1" name="teacher"  onChange={this.handleChange}id="">
                    <option> Choose Teacher</option>

                    {teachers.map(course=>
                        <option key={course.uid} value={course.uid} id="anjum" > {course.name} </option>
                    )}
                    </select>
                    </div>
                    <h1><p>Description</p></h1>
                    <div><input className="input_2" type="text" value={description} onChange={this.handleChange} name="description"/></div>
                    
                </form><span><button className="signin2" onClick={this.handleSubmit}>Submit</button></span><span><button className="signin3" onClick={this.handleBack}>Exit</button></span>
            </div>
            </div>
          );
    }
}
 
export default giveFeed;