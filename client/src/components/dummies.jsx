import React, { Component } from 'react';
import axios from 'axios'
import Counter from "./dummy"


class dumms extends Component {
    state = {  
        counters :[]
    }

    componentDidMount() {
        (async()=>{
            let {data : counters} = await axios.get("http://localhost:5000/");
            //console.log(counters);
            //let arr = []
            this.setState({counters})
        })().catch((e)=>{console.log(e)});;
        
    } 
    
    handleInc= counter=>
    {
        const counters = [...this.state.counters];
        const idx = counters.indexOf(counter);
        counters[idx]={...counter};
        //counters[idx].value++;
        this.setState({counters})
    }
    
    handleDec= counter=>
    {
        const counters = [...this.state.counters];
        const idx = counters.indexOf(counter);
        counters[idx]={...counter}
        //counters[idx].value--;
        this.setState({counters})
    }
    render() { 
        console.log(this.state.counters)
        return ( 
            //<div></div>
         
            <div>
                {this.state.counters.map(counter=><Counter key={counter.uid} counter={counter}  anjum={"great"} handleDec={this.handleDec} handleInc={this.handleInc}/>)}
            </div>
         );
    }
}
 
export default dumms;