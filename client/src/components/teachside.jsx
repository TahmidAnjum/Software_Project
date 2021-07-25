import React, { Component } from 'react'
import axios from 'axios';
import sign from 'jwt-encode';
import jwtDecode from 'jwt-decode';
const secret = 'secret'
class teachside extends Component {
    state = {
        courses :[]
      }

      takeCour = () =>
      {
          const gg = localStorage.getItem("anjum");
          ////console.log('teacher',jwtDecode(gg));
          const pp = jwtDecode(gg);
          (async()=>{
                let {data : courses} = await axios.post("http://localhost:5000/teacher/"+pp.name,pp);
                this.setState({courses});
                const jwt = sign(courses,secret);
                localStorage.setItem("Courses",jwt);
                const jwt1 = sign("topics",secret);
                localStorage.setItem("Option",jwt1);
                //console.log(jwt1);
                this.props.history.push("/teacher/"+pp.name+"/seetopics");
            })().catch((e)=>{console.log(e)});
      }
  
      addTopic = () =>
      {
        const gg = localStorage.getItem("anjum");
        ////console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        
        (async()=>{
              let {data : courses} = await axios.post("http://localhost:5000/teacher/"+pp.name,pp);
              this.setState({courses});
              const jwt = sign(courses,secret);
              localStorage.setItem("Courses",jwt);
              const jwt1 = sign("addtopics",secret);
              localStorage.setItem("Option",jwt1);
              //console.log(jwt1);
              this.props.history.push("/teacher/"+pp.name+"/seetopics");
          })().catch((e)=>{console.log(e)});
          //const gg = localStorage.getItem("anjum");
          ////console.log('teacher',jwtDecode(gg));
          //const pp = jwtDecode(gg);
          //const ee = localStorage.getItem("Course");
          //const ff = jwtDecode(ee);
          //(async()=>{
          //    const {data:kk} = await axios.post("http://localhost:5000/getCO",ff);
          //    const qus = sign(kk,secret);
          //    localStorage.setItem("COs",qus);
          //})().catch((e)=>{console.log(e)});
          //(async()=>{
          //    const {data : po} = await axios.get("http://localhost:5000/po");
          //    const pus = sign(po,secret);
          //    localStorage.setItem("POs",pus);
          //})().catch((e)=>{console.log(e)});
          //this.props.history.push("/teacher/"+pp.name+"/"+ff.title+"/"+ff.year+"/addtopics");
      }
      
      delTopic = () =>
      {
        const gg = localStorage.getItem("anjum");
        ////console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        (async()=>{
              let {data : courses} = await axios.post("http://localhost:5000/teacher/"+pp.name,pp);
              this.setState({courses});
              const jwt = sign(courses,secret);
              await localStorage.setItem("Courses",jwt);
              const jwt1 = sign("deltopics",secret);
              await localStorage.setItem("Option",jwt1);
              //console.log(jwt1);
              this.props.history.push("/teacher/"+pp.name+"/seetopics");
          })().catch((e)=>{console.log(e)});
          //const gg = localStorage.getItem("anjum");
          ////console.log('teacher',jwtDecode(gg));
          //const pp = jwtDecode(gg);
          //const ee = localStorage.getItem("Course");
          //const ff = jwtDecode(ee);
          //(async()=>{
          //    const {data:kk} = await axios.post("http://localhost:5000/getTopic",ff);
          //    const qus = sign(kk,secret);
          //    localStorage.setItem("Topics",qus);
          //})().catch((e)=>{console.log(e)});
          //this.props.history.push("/teacher/"+pp.name+"/"+ff.title+"/"+ff.year+"/deltopics");
      }
      
  
      hanQues  = () =>
      {
        const gg = localStorage.getItem("anjum");
        ////console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        (async()=>{
              let {data : courses} = await axios.post("http://localhost:5000/teacher/"+pp.name,pp);
              this.setState({courses});
              const jwt = sign(courses,secret);
              localStorage.setItem("Courses",jwt);
              const jwt1 = sign("question",secret);
              localStorage.setItem("Option",jwt1);
              //console.log(jwt1);
              this.props.history.push("/teacher/"+pp.name+"/seetopics");
          })().catch((e)=>{console.log(e)});
          //const gg = localStorage.getItem("anjum");
          ////console.log('teacher',jwtDecode(gg));
          //const pp = jwtDecode(gg);
          //const ee = localStorage.getItem("Course");
          //const ff = jwtDecode(ee);
          //this.props.history.push("/teacher/"+pp.name+"/"+ff.title+"/"+ff.year+"/question");
      }
  
      modCour = () =>
      {
        const gg = localStorage.getItem("anjum");
        ////console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        (async()=>{
              let {data : courses} = await axios.post("http://localhost:5000/teacher1/"+pp.name,pp);
              this.setState({courses});
              const jwt = sign(courses,secret);
              localStorage.setItem("Courses",jwt);
              const jwt1 = sign("moderatecourse",secret);
              localStorage.setItem("Option",jwt1);
              //console.log(jwt1);
              this.props.history.push("/teacher/"+pp.name+"/seetopics");
          })().catch((e)=>{console.log(e)});
          //const gg = localStorage.getItem("anjum");
          ////console.log('teacher',jwtDecode(gg));
          //const pp = jwtDecode(gg);
          //const ee = localStorage.getItem("Course");
          //const ff = jwtDecode(ee);
          //(async()=>{
          //    const {data:kk} = await axios.post("http://localhost:5000/delreqs",ff);
          //    const qus = sign(kk,secret);
          //    localStorage.setItem("delTopics",qus);
          //})().catch((e)=>{console.log(e)});
          //this.props.history.push("/teacher/"+pp.name+"/"+ff.title+"/"+ff.year+"/delTopc");
      }
      
      grade = () =>
      {
        const gg = localStorage.getItem("anjum");
        ////console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        (async()=>{
              let {data : courses} = await axios.post("http://localhost:5000/teacher/"+pp.name,pp);
              this.setState({courses});
              const jwt = sign(courses,secret);
              localStorage.setItem("Courses",jwt);
              const jwt1 = sign("viewgrades",secret);
              localStorage.setItem("Option",jwt1);
              //console.log(jwt1);
              this.props.history.push("/teacher/"+pp.name+"/seetopics");
          })().catch((e)=>{console.log(e)});
          
      }
  
  
      modQues = () =>
      {
          const gg = localStorage.getItem("anjum");
        ////console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        (async()=>{
              let {data : courses} = await axios.post("http://localhost:5000/modQues",pp);
              this.setState({courses});
              const jwt = sign(courses,secret);
              localStorage.setItem("Courses",jwt);
              const jwt1 = sign("moderateQuestion",secret);
              localStorage.setItem("Option",jwt1);
              //console.log(jwt1);
              this.props.history.push("/teacher/"+pp.name+"/seetopics");
          })().catch((e)=>{console.log(e)});
          //const gg = localStorage.getItem("anjum");
          ////console.log('teacher',jwtDecode(gg));
          //const pp = jwtDecode(gg);
          //const ee = localStorage.getItem("Course");
          //const ff = jwtDecode(ee);
          //this.props.history.push("/teacher/"+pp.name+"/"+ff.title+"/"+ff.year+"/question");
      }
      homepage = ()=>
      {
          const gg = localStorage.getItem("anjum");
          ////console.log('teacher',jwtDecode(gg));
          const pp = jwtDecode(gg);
          localStorage.clear();
          const jwt = sign(pp,secret);
          localStorage.setItem("anjum",jwt);
          this.props.history.push("/teacher/"+pp.name);
      }

      feedback = ()=>{
        const gg = localStorage.getItem("anjum");
        ////console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        localStorage.clear();
        const jwt = sign(pp,secret);
        localStorage.setItem("anjum",jwt);
        (async()=>{
            const {data:feed} = await axios.post("http://localhost:5000/getfeed",pp);
            console.log(feed);
            const jwt = sign(feed,secret);
            localStorage.setItem("feed",jwt);
            this.props.history.push("/teacher/"+pp.name+"/feedback");
        })();
        
        
      }
      feedbackMod = ()=>{
        const gg = localStorage.getItem("anjum");
        ////console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        localStorage.clear();
        const jwt = sign(pp,secret);
        localStorage.setItem("anjum",jwt);
        (async()=>{
            const {data:feed} = await axios.post("http://localhost:5000/getfeedMod",pp);
            console.log(feed);
            const jwt = sign(feed,secret);
            localStorage.setItem("feed",jwt);
            this.props.history.push("/teacher/"+pp.name+"/feedbackMod");
        })();
        
        
      }
      feedbackQues = ()=>{
        const gg = localStorage.getItem("anjum");
        ////console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        localStorage.clear();
        const jwt = sign(pp,secret);
        localStorage.setItem("anjum",jwt);
        (async()=>{
            const {data:feed} = await axios.post("http://localhost:5000/getfeedQues",pp);
            console.log(feed);
            const jwt = sign(feed,secret);
            localStorage.setItem("feed",jwt);
            this.props.history.push("/teacher/"+pp.name+"/feedbackQues");
        })();
        
        
      }
      logout = () =>
      {
          localStorage.clear();
          this.props.history.push("/");
      }
      render() { 
          return ( 
              <div className="TeachMas">
                  <button className="TeachSide" onClick={this.homepage}>Home</button>
                  <button className="TeachSide" onClick={this.takeCour}>See Topics</button>
                  <button className="TeachSide" onClick={this.addTopic}>Add Topic</button>
                  <button className="TeachSide" onClick={this.delTopic}>Delete Topic</button>
                  <button className="TeachSide" onClick={this.hanQues}>Set Question</button>
                  <button className="TeachSide" onClick={this.modQues}>Moderate Question</button>
                  <button className="TeachSide" onClick={this.modCour}>Moderate Course</button>
                  <button className="TeachSide" onClick={this.grade}>Grade Answer</button>
                  <button className="TeachSide" onClick={this.feedback}>FeedBack</button>
                  <button className="TeachSide" onClick={this.feedbackMod}>FeedBack(Course Moderator)</button>
                  <button className="TeachSide" onClick={this.feedbackQues}>FeedBack(from Q Mod)</button>
                  <button className="TeachSide" onClick={this.logout}>Log out</button>
              </div>
           );
      }
}
 
export default teachside;