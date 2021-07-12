/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
 
class dumm extends Component {
    

    
    render() {
        
        return (
        <div>
            <span className="badge m-2 bg-primary">{this.props.counter.name}</span>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Name</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.counter.Courses.map(crs=> 
                    <tr key={crs.uid}> 
                        <td><span className="badge m-2 bg-warning">{crs.title}</span></td> 
                        <td>{crs.name}</td> 
                        <td>{crs.year}</td> 
                    </tr>)}
                </tbody>
            </table>
        </div>
        );
        //console.log(this.formCnt());
        /*return (
            <div>
                 <span className="badge m-2 bg-primary">{this.props.counter.name}</span>
                 <ol>
                     {this.props.counter.Courses.map(crs=> <li key={crs.uid}><span className="badge m-2 bg-warning"> {crs.title} {crs.name} </span><ul> 
                        {crs.Students.map(std => <li key={std.uid}><span className="badge m-2 bg-danger">{std.student_id} : {std.name}</span></li> )}
                     </ul> </li> )}
                 </ol>
            </div>
            /*<div>
                <button onClick={()=>this.props.handleDec(this.props.counter)} className="btn btn-secondary btn-sm">Decrement</button>
                <span className={this.getBadgeClasses()}>{this.formCnt()}</span>
                <button onClick={()=>this.props.handleInc(this.props.counter)} className="btn btn-secondary btn-b">Increment</button>
            </div>*/
        
    }

    getBadgeClasses()
    {
        
        let classes = "badge m-2 bg-";
        //classes += this.props.counter.value === 0 ?"warning" : (this.props.counter.value>0?"primary":"danger");
        //console.log("ekhane ",this.props.counter.value, classes)
        return classes;
    }

    formCnt()
    {
        //console.log("kaj hcee", this.props.counter.value)
        //const {value} = this.props.counter;
        //return value === 0? 'Zero': value;
    }
}
 
export default dumm;