import React, { Component } from 'react'
import axios from 'axios';
class Problem extends Component {
    
    state = {
        problem :{
            course : '',
            year : '',
            question_no: '',
            problem_no : '',
            spec : '',
            marks : ''
        }
    }


    handleChange = e =>
    {
        const problem = {...this.state.problem};
        
        problem[e.currentTarget.name] = e.currentTarget.value;
        this.setState({problem});
    }


    handleSubmit =e =>
    {
        e.preventDefault();
        //console.log(this.state.account);
        (async()=>{
            //const st = ['anjum' ,'14'];
            const {status} = await axios.post("http://localhost:5000/problemSet", this.state.problem);
            //var path = {...this.state.path};
            console.log(status)
        })().catch((e)=>{console.log(e)});;
    }

    render() { 
        const {problem} = this.state;
        return (
            <div>
                
                <form action="" onSubmit={this.handleSubmit}>
                    <div>
                        <p>Course Title</p>
                    </div>
                    <div><input value={problem.course} onChange={this.handleChange} type="text" name="course" id="" /></div>
                    <div>
                        <p>Year</p>
                    </div>
                    <div><input value={problem.year} onChange={this.handleChange} type="text" name="year" id="" /></div>
                    <div>
                        <p>Quse. No</p>
                    </div>
                    <div><input value={problem.question_no} onChange={this.handleChange} type="text" name="question_no" id="" /></div>
                    <div>
                        <p>Prob No</p>
                    </div>
                    <div><input value={problem.problem_no} onChange={this.handleChange} type="text" name="problem_no" id="" /></div>
                    <div>
                        <p>Details</p>
                    </div>
                    <div><input value={problem.spec} onChange={this.handleChange} type="text" name="spec" id="" /></div>
                    <div>
                        <p>Marks</p>
                    </div>
                    <div><input value={problem.marks} onChange={this.handleChange} type="text" name="marks" id="" /></div>
                    <div><button onClick={this.handleSubmit}>Submit</button></div>
                </form>
                
            </div>
          );
        }
}

export default Problem;