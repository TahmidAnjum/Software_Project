import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';
import Teachside from './teachside';
class Questions extends Component {
    state = { 
        Question : jwtDecode(localStorage.getItem("ModQues")),
        Problems : [],
        show : true, 
        Feed :{ Description :''}
     }
    getSz = arr=>{
        
        return arr.length>0?true:false;
    }

    getProb = () =>
    {
        const {Question} = this.state;
        
        const bol = this.getSz(Question);
        if(bol){
            return Question[0].Problems;
        }
        else return [];
    }
    handleChange = e =>
    {
        const Feed = {...this.state.Feed};
        
        Feed[e.currentTarget.name] = e.currentTarget.value;
        this.setState({Feed});
    }
    handleYes = () =>{
        let show = {...this.state.show};
        show = false;
        this.setState({show});
    }
    handleNo = () =>
    {
        const gg = localStorage.getItem("anjum");
        const pp = jwtDecode(gg);
        this.props.history.push("/teacher/"+pp.name+"/seetopics");
    }

    handleSubmit = e =>
    {
        e.preventDefault();
        const {Description} = this.state.Feed;
        const gg = localStorage.getItem("anjum");
        const pp = jwtDecode(gg);
        const crstkn = localStorage.getItem("Course");
        const crs = jwtDecode(crstkn);
        const sed = {cuid : crs.uid, description : Description};
        (async()=>{
            const {data} = await axios.post("http://localhost:5000/fromQuesMod",sed);
            console.log("Anjum",data);
            
        })();
        this.props.history.push("/teacher/"+pp.name+"/seetopics");
    }
    render() { 
        //this.setProb();
        const {Question,show,Feed} = this.state;
        console.log("Des",Feed.Description);
        const Problems = this.getProb();
        console.log("Render Ques",Problems);
        const bol = this.getSz(Question);
        return (  
            <div className="frap">
                <Teachside history={this.props.history}/>
                <div className = "ModerQ">
                    <div hidden={bol}><p>This section is empty</p></div>
                    <div hidden={!bol} >
                        <div>
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan='2'><p>Problem No.</p></th>
                                    <th><p>Description</p></th>
                                    <th><p>Marks</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Problems.map(course=> 
                                <tr key={course.uid} > 
                                    <td><p>{course.numinQ}</p></td>
                                    <td><p>{course.num}</p></td>
                                    <td><p>{course.Description}</p></td>
                                    <td><p>{course.marks}</p></td>
                                </tr>)}
                            </tbody>
                        </table>
                        </div>
                        <br />
                        <br />
                        <div>
                            <h2><p>Do you propose any changes?</p></h2>
                            <div>
                                <span><button className="signin1" onClick={this.handleYes}>Yes</button></span>
                                <span><button className="signin1" onClick={this.handleNo}>No</button></span>
                            </div>
                            <br />
                            <div hidden={show}>
                                <h2><p>Please State your concerns : </p></h2>
                                <br />
                                <form action="">
                                    <div>
                                    <input className="text1" value={Feed.Description} onChange={this.handleChange} name="Description" type="text" id=""/>
                                    </div>
                                    
                                    <span><button className="signin1" onClick={this.handleSubmit}>Submit</button></span>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}
 
export default Questions;