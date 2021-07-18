import React, { Component } from 'react'
import axios from 'axios';
import Problems from './problems'

class Question extends Component {
    state = {  
        problems :[]
    }


    componentDidMount() {
        (async()=>{
            let {data : problems} = await axios.get("http://localhost:5000/setQ");
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
