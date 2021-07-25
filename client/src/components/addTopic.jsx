import React, { Component } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Teachside from './teachside';
//import sign from 'jwt-encode';
//const secret = 'secret';

class addTop extends Component {
    state = { 
        topic :
        {
            course :'',
            year : '',
            name : '',
            cos : [],
            co : '',
            pos :[],
            mul1 : false,
            mul2 : false

        },
        
    }

    PO = {};

    componentWillUnmount = () =>{
        //const prof = localStorage.getItem("anjum");
        //localStorage.clear();
        //localStorage.setItem("anjum",prof);
        console.log("unmounted add", localStorage);
    }
    


    handleChange = e =>
    {    
       const topic = {...this.state.topic};
       const tkn = localStorage.getItem("Course");
       const crs = jwtDecode(tkn);
       topic['course'] = crs.title;
       topic['year'] = crs.year;
       if(e.currentTarget.name==='cos')
       {
           topic[e.currentTarget.name].push(e.currentTarget.value);
           let arr = [...new Set(topic[e.currentTarget.name])];
           topic[e.currentTarget.name] = arr;
        }
       else topic[e.currentTarget.name] = e.currentTarget.value;
       (async ()=>{
           await this.setState({topic});
           console.log(topic);
       })();
       //
    }

    show2 = e =>
    {
        //document.getElementById("newForm2").multiple=true;
        //document.getElementById("newForm2").onClick="";
        //document.getElementById("newForm2").value=this.state.topic.pos;
        
    }

    handleChangeCO = e =>
    {
        
       const topic = {...this.state.topic};
       if(e.currentTarget.name==='pos')
       {
           topic[e.currentTarget.name].push(e.currentTarget.value);
           let arr = [...new Set(topic[e.currentTarget.name])];
           topic[e.currentTarget.name] = arr;
        }
       else topic[e.currentTarget.name] = e.currentTarget.value;
       (async ()=>{
           await this.setState({topic});
           console.log(topic);
       })();
       //
    }

    handleNewCO = e =>
    {
        //document.getElementById("selectTab").disabled=true;
        //document.getElementById("newForm1").disabled=false;
        //document.getElementById("newForm2").disabled=false;
        const topic = {...this.state.topic};
        topic['mul2'] = true;
        this.setState({topic});

        //document.getElementById("newForm3").disabled=false;
        //document.getElementById("newForm4").disabled=false;
        
    }
    


    handleAdd = e =>
    {
        e.preventDefault();
        const crs = jwtDecode(localStorage.getItem("Course"));
        const topic = {...this.state.topic};
        
        
        (async ()=>{
            
            const req = {name :topic['co']+"_"+crs.title, flag : 0, pos : topic['pos']}
            const {data} = await axios.post("http://localhost:5000/createCO", req);
            //await this.setState({topic});
            console.log(data);
            topic['cos'].push(data.uid.toString());
            topic['co'] = '';
            topic['pos']=[];
            
            (async ()=>{
                await this.setState({topic});
            })();
            console.log(this.state.topic);
        })();

    }

    getUser = async() =>{
        const gg = await localStorage.getItem("anjum");
       //console.log('teacher',jwtDecode(gg));
       const pp = jwtDecode(gg);
       return pp;
    }
    getCourse = async() =>{
        const ee = await localStorage.getItem("Course");
        const ff = jwtDecode(ee);
       return ff;
    }

    handleSubmit =e =>
    {
       e.preventDefault();
       const topic = {...this.state.topic};
       //const gg = localStorage.getItem("anjum");
       //console.log('teacher',jwtDecode(gg));
       const pp = this.getUser();
       const ee = localStorage.getItem("Course");
       const ff = jwtDecode(ee);
       //this.props.history.push("/teacher/"+pp.name+"/"+ff.title+"/"+ff.year);
       //localStorage.removeItem('Question');
       //localStorage.removeItem('topic');
       console.log(this.state.topic);
       //console.log(this.state.account);
       (async()=>{
            const req = {name :topic.name, cuid:ff.uid, cos : topic['cos']}
           //const st = ['anjum' ,'14'];
           const {status} = await axios.post("http://localhost:5000/createTopic", req);
           //var path = {...this.state.path};
           console.log(status);
           this.props.history.push("/teacher/"+pp.name+"/seetopics");
       })().catch((e)=>{console.log(e)});;
    }


    render() {
        //const tch = jwtDecode(localStorage.getItem("Anjum"));
        console.log("render");
        const {topic} = this.state;
        const crs =(localStorage.getItem("Course") && jwtDecode(localStorage.getItem("Course")))===null?[]:jwtDecode(localStorage.getItem("Course")); //jwtDecode(localStorage.getItem("Course"));//
        const COs =(localStorage.getItem("COs") && jwtDecode(localStorage.getItem("COs")))===null?[]:jwtDecode(localStorage.getItem("COs")); //jwtDecode(localStorage.getItem("COs"));   //
        const POs =(localStorage.getItem("POs") && jwtDecode(localStorage.getItem("POs")))===null?[]:jwtDecode(localStorage.getItem("POs")); //jwtDecode(localStorage.getItem("POs"));   //
        //console.log(COs);
        //console.log(crs,POs);
        return (
            <div className="frap">
                <Teachside history={this.props.history}/>
                <div className="AddTopic">
                    <div>
                        <h1><p>Course Title : {crs.title}</p></h1>
                    </div>
                    
                    <div>
                        <h1><p>Name : {crs.name}</p></h1>
                    </div>
                    
                    <div>
                        <h1><p>Year : {crs.year}</p></h1>
                    </div>
                    
                    <form action="" onSubmit={this.handleSubmit}>   
                        
                    <div>
                    <h2><p> Topic Name:</p></h2>
                    </div>
                    
                    <div><input className="addInput" value={topic.name} onChange={this.handleChange} type="text" name="name" id="" /></div>
                
                    <div className="col-md-12">
                    <select className="form-select"  value={topic.cos} multiple onChange={this.handleChange} type="text" name="cos" searchable="Search here.." id="selectTab">
                    <option value="" disabled >Choose COs</option>
                    {COs.map(course=>
                        <option key={course.uid} value={course.uid}> {course.name} </option>
                    )}
                    </select>
                    </div>

                    <div>
                    <h2><p>---OR---</p></h2>
                    </div>
                    </form>
                    
                    <form action="" onSubmit={this.handleSubmit} >
                    <div>
                        <h2><p>New CO</p></h2>
                    </div>
                    <div><input className="addInput"  value={this.co} onChange={this.handleChangeCO} type="text"  name="co" id="newForm1" /></div>
                    
                    <div className="col-md-12">
                    <select className="form-select"   value={topic.pos} multiple onChange={this.handleChangeCO} type="text" name="pos" id="newForm2">
                    <option value="" disabled >Choose POs</option>
                    {POs.map(course=>
                        <option key={course.uid} value={course.uid} id="anjum"> {course.name} </option>
                    )}
                    </select>
                    </div> 
                    <div><button className="signin" onClick={this.handleAdd}>+</button></div>
                    </form>
                    <div><button className="signin" onClick={this.handleSubmit}>Submit</button></div>
                </div>
            </div>
          );
    }
    ////mdb-select colorful-select dropdown-primary md-form //browser-checkbox custom-select custom-select-lg mb-3//<label className="mdb-main-label">Label example</label><option value="1">USA</option>
                   //<option value="2">Germany</option>
                   //<option value="3">France</option>
                   //<option value="4">Poland</option>
                   //<option value="5">Japan</option>
                   //<div><input value="" onClick={this.handleChangeCO} disabled type="text"  name="cos" id="newForm3" /></div>
                   //<div><input value="" onClick={this.handleChangeCO} disabled type="text"  name="cos" id="newForm4" /></div>
}
 
export default addTop;
