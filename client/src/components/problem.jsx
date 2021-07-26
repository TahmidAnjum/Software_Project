import React, { Component } from 'react'
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Teachside from './teachside';

const sign = require('jwt-encode');
const secret = 'secret';
class Problem extends Component {
    
    state = {
        problem :{
            course : '',
            year : '',
            Section: '',
            question_no: '',
            problem_no : '',
            spec : '',
            marks : '',
            qAr :[],
            pAr :[]
        }
    }


    componentDidMount()
    {
        const tkn = localStorage.getItem("Course");
        const crs = jwtDecode(tkn);
        (async()=>{
            const {data:kk} = await axios.post("http://localhost:5000/setQ", crs);
            const qus = sign(kk,secret);
            localStorage.setItem("Question",qus);
            (async()=>{
                const {data:qq} = await axios.post("http://localhost:5000/setp", kk);
                const prb = sign(qq,secret);
                localStorage.setItem("Problem",prb);
            })().catch((e)=>{console.log(e)});;
        })().catch((e)=>{console.log(e)});
    }

    handleChange = e =>
    {
        
        const problem = {...this.state.problem};
        const tkn = localStorage.getItem("Course");
        const crs = jwtDecode(tkn);
        
        
        problem['course'] = crs.title;
        problem['year'] = crs.year;
        console.log(crs)
        problem[e.currentTarget.name] = e.currentTarget.value;
        
        if(e.currentTarget.name==='Section')
        {   
            let arr =(e.currentTarget.value==='A')?[{value :1} ,{value :2} ,{value :3} ,{value :4}]:[{value :5} ,{value :6} ,{value :7} ,{value :8}];
            //console.log(crs);
            e.preventDefault();      
            const qq = jwtDecode(localStorage.getItem("Problem"));  
            //console.log("prob",qq);
            if(qq.length===0)problem['qAr'] = arr;
            for(let i=0;i<qq.length;i++)
            {
                //console.log("mid",crs.credit_hours/4.0*35.0,qq[i]);
                if(crs.credit_hours/3.0*35.0===qq[i].total_amount)
                {
                    //console.log()
                    problem['qAr'] = arr.filter(prbb=>prbb.value!==qq[i].numinQ);
                    arr = problem['qAr']
                }
                else 
                {
                    problem['qAr'] = arr;
                }
            }

            (async ()=>{
                console.log("Arr",arr);
                await this.setState({problem});
                console.log(this.state.problem);
            })();
            
        }
        else if(e.currentTarget.name==='question_no')
        {
            let arr = [{val :'a'}, {val: 'b'},{val: 'c'}, {val:'d'}, {val:'e'}];
            e.preventDefault();   
            const vg = parseInt(e.currentTarget.value) ; 
            const qq = jwtDecode(localStorage.getItem("Question"));
            (async ()=>{
                const sed = {numQ : vg, id : qq.uid};
                const {data:pp} = await axios.post("http://localhost:5000/setpq", sed);
                //console.log(pp);
                //await this.setState({problem});
                if(pp.length!==0)//console.log(pp);
                {
                    for(let i=0;i<pp.length;i++)
                    {
                        let pr = arr.filter(ar=>ar.val!==pp[i].num)
                        arr = pr
                    }
                    
                    //console.log(problem['pAr']);
                }
                problem['pAr'].push(arr[0]);
                
                (async ()=>{
                    await this.setState({problem});
                })();
            })().catch((e)=>{console.log(e)});
            //console.log('here i am');
            
        }
        else if(e.currentTarget.name==='marks')
        {
            const check = parseInt(e.currentTarget.value);
            const qq = jwtDecode(localStorage.getItem("Problem"));
            let id = -1;
            for(let i=0;i<qq.length;i++)
            {
                if(qq[i].numinQ===parseInt(problem['question_no'])){id = i;break;}
            }
            const maxVal = (id===-1)?crs.credit_hours/3.0*35.0:crs.credit_hours/3.0*35.0-qq[id].total_amount;
            const ans = Math.min(check,maxVal);
            console.log(maxVal);
            problem['marks'] = ans.toString();
            (async ()=>{
                await this.setState({problem});
                //console.log(this.state.problem);
            })();
        }
        else{
            (async ()=>{
                await this.setState({problem});
                //console.log(this.state.problem);
            })();
        }
        (async ()=>{
            await this.setState({problem});
        })();
        
    }


    handleSubmit =e =>
    {
        e.preventDefault();
        
        const gg = localStorage.getItem("anjum");
        //console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        const ee = localStorage.getItem("Course");
        const ff = jwtDecode(ee);
        this.props.history.push("/teacher/"+pp.name+"/"+ff.title+"/"+ff.year+"/seetopics");
        localStorage.removeItem('Question');
        localStorage.removeItem('Problem');
        console.log(this.state.problem);
        //console.log(this.state.account);
        (async()=>{
            //const st = ['anjum' ,'14'];
            const {status} = await axios.post("http://localhost:5000/problemSet", this.state.problem);
            //var path = {...this.state.path};
            console.log(status);
            
        })().catch((e)=>{console.log(e)});;
    }
    
    render() { 
        const {problem} = this.state;
        const tkn = localStorage.getItem("Course");
        const crs = jwtDecode(tkn);
        return (
            <div className='frap'>
                <Teachside history={this.props.history}/>
                <div className="prbst">
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
                    <div className="col-md-12">
                        <h3><p>Section:</p></h3>
                        <select className="form-select1" onChange={this.handleChange}/*{(e)=>{const section_no= e.target.value;this.setState({section_no}); }}*/ type="text" name="Section">
                        <option>Choose Section</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        </select>
                    </div>
                    
                    <div className="col-md-12">
                    <h3><p>Question No.:</p></h3>
                    <select className="form-select1"  onChange={this.handleChange} type="text" name="question_no"  >
                        <option>Select Quse. No</option>
                        {this.state.problem.qAr.map(course=>
                        <option key={course.value} value={course.value}> {course.value} </option>
                        
                        )}  
                    </select>
                                  
                    </div>
                    <div>
                        <p></p>
                    </div>
                    <div>
                    <h3><p>Problem No. :</p></h3>
                        <select className="form-select1"  onChange={this.handleChange} type="text" name="problem_no" id="" >
                        <option>Select Prob No</option>
                        {this.state.problem.pAr.map(course=>
                        <option key={course.val} value={course.val}> {course.val} </option>
                        
                        )}
                        </select>
                    </div>
                    <div>
                        <p>Details</p>
                    </div>
                    <div><input className="input_1" value={problem.spec} onChange={this.handleChange} type="text" name="spec" id="" /></div>
                    <div>
                        <p>Marks</p>
                    </div>
                    <div><input className="input_1" value={problem.marks} onChange={this.handleChange} type="text" name="marks" id="" /></div>
                    <div><button className="signin" onClick={this.handleSubmit}>Submit</button></div>
                </form>
                
            </div>
            </div>
          );
        }
}

export default Problem;