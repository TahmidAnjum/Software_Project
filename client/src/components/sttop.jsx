import React, { Component } from 'react'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
//import Teachside from './teachside';
import Student from './student';
import { Bar } from 'react-chartjs-2';
class stTopic extends Component {
    state = {
        topics :[],
        GPAData : {
            labels: [],
            datasets :[{
            label: 'PO weights',
            data: [],
            backgroundColor: [],
            borderColor: [], 
            borderWidth: 1
            }]
            },
    }

    constructor(props){
        super(props);
        //console.log('i was here')
        const gg = localStorage.getItem("anjum");
        //console.log('teacher',jwtDecode(gg));
        const pp = jwtDecode(gg);
        const ee = localStorage.getItem("Course");
        const ff = jwtDecode(ee);
        //const val = {title : '', year :'' }

        (async()=>{
            let {data : topics} = await axios.post("http://localhost:5000/teacher/"+pp.name+"/"+ff.title+"/"+ff.year,ff);
            
            this.setState({topics});
            let mp1 = new Map();
            for(let i=0;i<topics.length;i++)
            {
                for(let j=0;j<topics[i].COs.length;j++)
                {
                    for(let k=0;k<topics[i].COs[j].POs.length;k++)
                    {
                        if(mp1.has(topics[i].COs[j].POs[k].name))mp1.set(topics[i].COs[j].POs[k].name,mp1.get(topics[i].COs[j].POs[k].name)+1);
                        else mp1.set(topics[i].COs[j].POs[k].name,1);
                        //console.log(topics[i].COs[j].POs[k].name);
                    }
                    
                }
            }
            console.log(mp1);
            const arr1 = Array.from(mp1)
            const labs = [];
            const vals = [];
            let bgc1 = [];
            let brc1 = [];
            for(let i=0;i<arr1.length;i++)
            {
                let r = (Math.floor(Math.random() * (255 - 70) ) + 70).toString();
                let g = (Math.floor(Math.random() * (255 - 70) ) + 70).toString();
                let b = (Math.floor(Math.random() * (255 - 70) ) + 70).toString();
                labs.push(arr1[i][0]);
                vals.push(arr1[i][1]);
                bgc1.push(`rgba(${r},${g},${b},0.9)`)
                brc1.push(`rgba(${r},${g},${b},1)`)
            }
            console.log(labs,vals);
            const GPAData   = {...this.state.GPAData};
            const {datasets: d2}= GPAData
            d2.forEach(ds=>{
                ds['data'] = vals;
                ds['backgroundColor'] = bgc1;
                ds['borderColor'] = brc1;
            })
            GPAData['datasets'] = d2;
            GPAData['labels'] = labs;
            this.setState({GPAData});
            //let labels = {...this.state.labels};
            //labels = labs;
            //this.setState({labels});
            //let data = {...this.state.data};
            //data = vals;
            //this.setState({data});
            
            console.log(this.state)

        })().catch((e)=>{console.log(e)});;
    }
    dumm= c=>{
        //console.log("anjum320");
    }
    render() { 
        return (
            <div>
                <Student history={this.props.history}/>
                <div className="Topics"><ol>
                {this.state.topics.map(course=>
                <li  key={course.uid}> 
                    <div ><u>{course.name}<br /></u>  <ol type='a'> <br />
                        {course.COs.map(co=>
                        <li>
                            
                                    <i>{co.name}</i> <ol type='i'> {co.POs.map(po=>
                                    
                                <li >
                                        {po.name}
                                </li>
                            )}<br /></ol>
                            
                        </li> 
                           
                        )} <br /> </ol> 
                    </div>  
                </li>
                )} <br /> </ol>
                <div>
                        <Bar
                            data={this.state.GPAData}
                            height={300}
                            width={500}
                            options={{maintainAspectRatio:true}}
                        />
                    </div>
                </div>
                
                
            </div>
          );
    }
}
 
export default stTopic;