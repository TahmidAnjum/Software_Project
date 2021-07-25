import jwtDecode from 'jwt-decode';
import sign from 'jwt-encode';
import axios from 'axios';
import Teachside from './teachside';
import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import imag from '../images/FIgmaPics/wp.png'

const secret = 'secret';

class Courses extends Component {
    state = { 
        courses : []
    }

    handle = (optn,course) =>
    {
        console.log(localStorage);
        const crs = sign(course,secret);
        localStorage.setItem("Course",crs);
        const gg = localStorage.getItem("anjum");
        ////console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        if(optn==="addtopics")
        {
            (async()=>{
                const {data:kk} = await axios.post("http://localhost:5000/getCO",course);
                const qus = sign(kk,secret);
                await localStorage.setItem("COs",qus);
                (async()=>{
                    const {data : po} = await axios.get("http://localhost:5000/po");
                    const pus = sign(po,secret);
                    await localStorage.setItem("POs",pus);
                    this.props.history.push("/teacher/"+pp.name+'/'+course.title+'/'+course.year+'/'+optn);
                })().catch((e)=>{console.log(e)});
            })().catch((e)=>{console.log(e)});
            
            
        }
        else if(optn==="deltopics")
        {
          (async()=>{
              const {data:kk} = await axios.post("http://localhost:5000/getTopic",course);
              const qus = sign(kk,secret);
              localStorage.setItem("Topics",qus);
              this.props.history.push("/teacher/"+pp.name+'/'+course.title+'/'+course.year+'/'+optn);
          })().catch((e)=>{console.log(e)});
        }
        else if(optn==="moderatecourse")
        {
            //console.log("Here I am");
            (async()=>{
                const {data:kk} = await axios.post("http://localhost:5000/delreqs",course);
                console.log("delreqs",kk);
                const qus = sign(kk,secret);
                await localStorage.setItem("delTops",qus);
                (async()=>{
                    const {data:jj} = await axios.post("http://localhost:5000/getaddtop",course);
                    console.log(jj);
                    const rus = sign(jj,secret);
                    await localStorage.setItem("addTops",rus);
                    this.props.history.push("/teacher/"+pp.name+'/'+course.title+'/'+course.year+'/'+optn);
                })().catch((e)=>{console.log(e)});
            })().catch((e)=>{console.log(e)});
            
            
            
        }
        else if(optn==="moderateQuestion")
        {
            //console.log("Question moderate");
            (async()=>{
                let {data} = await axios.post("http://localhost:5000/getQues",course);
                //const problems = data.Problems;
                //this.setState({problems})
                console.log(data);
                //if(data.)
                const qus = sign(data,secret);
                if(data.length===0||data[0].Problems.length===0){
                    window.alert("No question found");
                }
                else{
                    console.log(jwtDecode(qus));
                await localStorage.setItem("ModQues",qus);
                this.props.history.push("/teacher/"+pp.name+'/'+course.title+'/'+course.year+'/'+optn);
                }
                //console.log(qus);
                
                //if(data.lenth===0)this.history.push()
            })().catch((e)=>{console.log(e)});;
        }
        else if(optn==="viewgrades")
        {
            (async()=>{
                let {data} = await axios.post("http://localhost:5000/viewgrades",course);
                //const problems = data.Problems;
                //this.setState({problems})
                //console.log('anjum',data);
                //if(data.)
                /*const qus = sign(data,secret);
                if(data.length===0||data[0].Problems.length===0){
                    window.alert("No question found");
                }
                else{
                    console.log(jwtDecode(qus));
                await localStorage.setItem("ModQues",qus);*/
                console.log("data");
                const rus = sign(data,secret);
                await localStorage.setItem("grades",rus);
                if(data.length===0||data[0].grade===null)window.alert("No info found")
                else this.props.history.push("/teacher/"+pp.name+'/'+course.title+'/'+course.year+'/'+optn);

                //}*/
                //console.log(qus);
                
                //if(data.lenth===0)this.history.push()
            })().catch((e)=>{console.log(e)});   
        }
        else if(optn!=='') this.props.history.push("/teacher/"+pp.name+'/'+course.title+'/'+course.year+'/'+optn);
    }
    render() { 
        //const gg = localStorage.getItem("anjum");
        ////console.log('teacher',jwtDecode(gg));
        //const pp = jwtDecode(gg);
        const ll = localStorage.getItem("Courses");
        const courses = jwtDecode(ll);
        const an = localStorage.getItem("Option");
        const optn = jwtDecode(an);
        //console.log(ans);
        return ( 
            <div className="frap">
                <Teachside history={this.props.history}/>
                <div className="Courses">
                {courses.map(course=> 
                
                <div key={course.uid} className="gg"> 
                    <div><img src={imag} alt="Avatar"  style={{width:'inherit', height: '100px' , overflow :'hidden'}} /></div>
                    <div className="ggV"><button className="Topbutt"onClick={()=>this.handle(optn, course)}>January {course.year} : {course.title} - {course.name}</button></div>
                </div>
                
                )}
                </div>
            </div>
        );
    }
}
//Link to={`/teacher/${pp.name}/${course.title}/${course.year}/${optn}`}
export default Courses;