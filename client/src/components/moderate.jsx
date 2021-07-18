import jwtDecode from 'jwt-decode';
import React, { Component } from 'react'
import axios from 'axios';
import sign from 'jwt-encode';
const secret = 'secret';
class modeCour extends Component {
    state = { 
        addTops: (localStorage.getItem("addTops") && jwtDecode(localStorage.getItem("addTops")))===null?[]:jwtDecode(localStorage.getItem("addTops")),
        delTops: (localStorage.getItem("delTops") && jwtDecode(localStorage.getItem("delTops")))===null?[]:jwtDecode(localStorage.getItem("delTops"))
     }

    componentWillUnmount()
    {
        if((localStorage.getItem("addTops") && jwtDecode(localStorage.getItem("addTops")))!==null)localStorage.removeItem("addTops");
        if((localStorage.getItem("delTops") && jwtDecode(localStorage.getItem("delTops")))===null)localStorage.removeItem("delTops");
        //console.log("moderate unmout");
    }

    approveAdd = c =>{
        (async()=>{
            let {data : topics} = await axios.post("http://localhost:5000/appadd",c);
            //this.setState({topics})
            console.log(topics);
            let addTops = [...this.state.addTops];
            const arr = addTops.filter(top=>top.uid!==c.uid);
            addTops = arr;
            this.setState({addTops});
            if(addTops.length>0)
            {
                const jwt = sign(addTops,secret);
                localStorage.setItem("addTops",jwt);
            }
            else localStorage.removeItem("addTops");
        })().catch((e)=>{console.log(e)});;
        console.log("Haroon");
        //console.log("Tahmid");
    }

    approveDel = c =>{
        (async()=>{
            //const crs = jwtDecode(localStorage.getItem("Course"));
            //const sed = {topic : c, cuid : crs.uid};
            let {data : topics} = await axios.post("http://localhost:5000/appdel",c);
            //this.setState({topics})
            console.log(topics);
            let delTops = [...this.state.delTops];
            const arr = delTops.filter(top=>top.uid!==c.uid);
            delTops = arr;
            this.setState({delTops});
            if(delTops.length>0)
            {
                const jwt = sign(delTops,secret);
                localStorage.setItem("delTops",jwt);
            }
            else localStorage.removeItem("delTops");
        })().catch((e)=>{console.log(e)});;
        
        //console.log("Anjum");
    }

    rejectAdd = c =>{

        //console.log("Bin");
    }

    rejectDel = c =>{
        (async()=>{
            let {data : topics} = await axios.post("http://localhost:5000/rejdel",c);
            //this.setState({topics})
            console.log(topics);
            let delTops = [...this.state.delTops];
            const arr = delTops.filter(top=>top.uid!==c.uid);
            delTops = arr;
            this.setState({delTops});
            if(delTops.length>0)
            {
                const jwt = sign(delTops,secret);
                localStorage.setItem("delTops",jwt);
            }
            else localStorage.removeItem("delTops");
        })().catch((e)=>{console.log(e)});;
        console.log("Haroon");
    }

    getSz = arr=>{
        
        return arr.length>0?true:false;
    }

    render() { 
        //const addTops = jwtDecode(localStorage.getItem("addTops"));
        //const delTops = jwtDecode(localStorage.getItem("delTops"));
        //this.setTops();
        const {addTops, delTops} = this.state;
        const getAdd = this.getSz(addTops); 
        const getDel = this.getSz(delTops); 
        return (
            <div> 
                <div>
                <div>Delete Topic Requests {getDel}</div>
                <div className="gg1">
                <div hidden={getDel}>This section is empty</div>
                <div hidden={!getDel} >
                {delTops.map(course=> 
                
                <div key={course.uid} > 
                   <h2>-{course.name} <button onClick={()=>{this.approveDel(course)}}>+</button><button onClick={()=>{this.rejectDel(course)}}>-</button></h2>
                </div>)}
                </div>
                </div>
                </div>
                <div>Add Topic Requests {getAdd}</div>
                <div className="gg2">
                <div hidden={getAdd}>This section is empty</div>
                <div hidden={!getAdd}>
                {addTops.map(course=> 
                <div key={course.uid} > 
                    <h2>-{course.name}</h2> <button onClick={()=>{this.approveAdd(course)}}>+</button><button onClick={()=>{this.rejectAdd(course)}}>-</button>
                </div>)}
                </div>
                </div>
            </div>
         );
    }
}
 
export default 
modeCour;