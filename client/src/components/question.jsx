import React, { Component } from 'react'
import axios from 'axios';
import Problems from './problems'

class Question extends Component {
    state = {  
        problems :[]
    }


    componentDidMount() {
        (async()=>{
            const crs = {uid : 17};
            let {data} = await axios.post("http://localhost:5000/getQues",crs);
            const problems = data.Problems;
            this.setState({problems})
        })().catch((e)=>{console.log(e)});;
        
    } 
    render() { 
        return (
            <div>
                {this.state.problems.map(problem=><Problems key={problem.uid} problem={problem} handleDec={this.handleDec} handleInc={this.handleInc}/>)}
            </div>
          );
    }
}

 
export default Question;
