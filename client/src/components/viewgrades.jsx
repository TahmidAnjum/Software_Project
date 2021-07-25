import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import Student from "./student";
//import "./CSS/viewGrades.css";

class ViewGrades extends Component {
  state = {
      courses :{
          level : '',
          term : '' ,
          info : []
      }
  };

  handleChange = e =>
  {
      const courses = {...this.state.courses}
      courses[e.currentTarget.name] = e.currentTarget.value
      this.setState({courses});
      //console.log()
  }
  getGrd = (num) =>{
    if(num>=4.00) return 'A+' ;
    if(num>=3.75) return 'A';
    if(num>=3.50) return 'A-';
    if(num>=3.25) return 'B+';
    if(num>=3.00) return 'B';
    if(num>=2.75) return 'C+';
    if(num>=2.50) return 'C';
    if(num>=2.25) return 'D+';
    if(num>=2.00) return 'D';
    if(num< 0.00) return 'F';
  }


handleSubmit= e =>
{
    const {courses} = this.state;
    if(courses.level==='') window.alert('Please select a level')
    else if(courses.term==='') window.alert('Please select a term')
    else 
    {
        const lvl = parseInt(courses.level);
        const trm = (courses.term==='I')?1:2;
        const gg = localStorage.getItem("anjum");
        //console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        //console.log(pp);
        //console.log(lvl,trm);
        (async()=>{
            const req = {suid : pp.uid, level : lvl, term : trm};
            const {data:info} = await axios.post("http://localhost:5000/seeresult", req);
            const courses = {...this.state.courses}
            //console.log("info",info);
            courses['info'] = info
            this.setState({courses});
            console.log(this.state);
        })();
    }
}

back = e =>{
    const gg = localStorage.getItem("anjum");
    //console.log('teacher',jwtDecode(gg));
    const pp = jwtDecode(gg);
    this.props.history.push(`/student/${pp.name}/${pp.student_id}`)
}

  render() {
    //console.log(this.state);
    return (
      <div>
        <Student history={this.props.history}/>
        <div className="stdfeed">
        <h1 className="view-grade-header"><p>View Grades</p></h1>
        <br />
        <br />
        <br />
        <div className="col-md-12">
          <select className="form-select1" onChange={this.handleChange} name="level">
            <option value="">
              Select a Level
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="col-md-12">
          <select className="form-select1" onChange={this.handleChange} name="term">
            <option value="" >
              Select a Term
            </option>
            <option value="I">I</option>
            <option value="II">II</option>
          </select>
        </div>

        <button type="button" className="signin2" onClick={this.handleSubmit}>
          Show
        </button>
        <button type="button" className="signin3" onClick={this.back}>
          Back
        </button>
        <table className="tabtab">
          <thead>
            <tr>
              <th><p>Course No</p></th>
              <th><p>Course Title</p></th>
              <th><p>Credit Hours</p></th>
              <th><p>Grade</p></th>
              <th><p>GPA</p></th>
            </tr>
          </thead>
          <tbody>
          {this.state.courses.info.map(crs=> 
                    <tr key={crs.course.uid}> 
                        <td><p>{crs.course.title}</p></td> 
                        <td><p>{crs.course.name}</p></td> 
                        <td><p>{crs.course.credit_hours}</p></td> 
                        <td><p>{crs.grade.GPA}</p></td> 
                        <td><p>{this.getGrd(crs.grade.GPA)}</p></td> 
                    </tr>)}
          </tbody>
        </table>
        
      </div>
      </div>
    );
  }
}

export default ViewGrades;