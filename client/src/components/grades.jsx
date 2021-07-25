import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';
import {Bar,Doughnut} from 'react-chartjs-2'
import Teachside from './teachside';
class Grade extends Component {
    constructor(props){
        super(props);
        const jj = localStorage.getItem("grades");
        const kk = jwtDecode(jj);
        //console.log(kk);
        kk.sort((a,b)=>{
            return a.student.student_id-b.student.student_id
        })
        let lab = [];
        let dat = [];
        let mar = [];
        let bgc1 = [];
        let bgc2 = [];
        let brc1 = [];
        let brc2 = [];
        //let st1 = new Set();
        //let st2 = new Set();
        let mp1 = new Map();
        let mp2 = new Map();
        for(let i=0;i<kk.length;i++)
        {
            let r = (Math.floor(Math.random() * (255 - 70) ) + 70).toString();
            let g = (Math.floor(Math.random() * (255 - 70) ) + 70).toString();
            let b = (Math.floor(Math.random() * (255 - 70) ) + 70).toString();
            lab.push(kk[i].student.name);
            dat.push(kk[i].grade.GPA);
            //st1.add(kk[i].grade.GPA);
            if(mp1.has(kk[i].grade.GPA))mp1.set(kk[i].grade.GPA,mp1.get(kk[i].grade.GPA)+1);
            else mp1.set(kk[i].grade.GPA,1);
            mar.push(kk[i].grade.marks);
            //st2.add(kk[i].grade.marks);
            if(mp2.has(kk[i].grade.marks))mp2.set(kk[i].grade.marks,mp2.get(kk[i].grade.marks)+1);
            else mp2.set(kk[i].grade.marks,1);
            bgc1.push(`rgba(${r},${g},${b},0.7)`)
            bgc2.push(`rgba(${g},${b},${r},0.7)`)
            brc1.push(`rgba(${r},${g},${b},1)`)
            brc2.push(`rgba(${g},${b},${r},1)`)

        }
        const arr1 = Array.from(mp1)
        const arr2 = Array.from(mp2)
        arr1.sort((a,b)=>{
            return b[0]-a[0];
        })
        arr2.sort((a,b)=>{
            return b[0]-a[0];
        })
        const labs1 = [];
        const labs2 = [];
        const vals1 = [];
        const vals2 = [];
        for(let i=0;i<arr1.length;i++)
        {
            labs1.push("GPA "+arr1[i][0].toString());
            vals1.push(arr1[i][1]);
        }

        for(let i=0;i<arr2.length;i++)
        {
            labs2.push("Mark "+arr2[i][0].toString());
            vals2.push(arr2[i][1]);
        }
        console.log(labs1);
        console.log(vals1);
        console.log(labs2);
        console.log(vals2);
        this.state={
            tr : 1,
            GPAData : {
                labels: lab,//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                            datasets :[{
                                label: 'GPA achieved',
            data: dat,//[12, 19, 3, 5, 2, 3],
            backgroundColor: bgc1,
            borderColor: brc1, /*[
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],*/
            borderWidth: 1
                            }]
            },
            
            marksData : {
                labels: lab,//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                            datasets :[{
                                label: 'Marks achieved(%)',
            data: mar,//[12, 19, 3, 5, 2, 3],
            backgroundColor: bgc2,/*[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],*/
            borderColor: brc2, /*[
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],*/
            borderWidth: 1
                            }]
            },
            GPAdou :{
                labels: labs1,//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets :[{
                    label: 'GPA %',
                    data: vals1,
                    backgroundColor: bgc1.slice(0,vals1.length),
                    borderColor: brc1.slice(0,vals1.length),
                    borderWidth: 1
                }]
            },
            marksDou :{
                labels: labs2,//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets :[{
                    label: 'Marks %',
                    data: vals2,
                    backgroundColor: bgc1.slice(0,vals2.length),
                    borderColor: brc1.slice(0,vals2.length),
                    borderWidth: 1
                }]
            },
            
        }
    }

    butt = () =>{
        const jj = localStorage.getItem("grades");
        const kk = jwtDecode(jj);
        //console.log(kk);
        kk.sort((a,b)=>{
            return a.grade.marks-b.grade.marks
        })
        let lab = [];
        let dat = [];
        let mar = [];
        for(let i=0;i<kk.length;i++)
        {
            lab.push(kk[i].student.name);
            dat.push(kk[i].grade.GPA);
            mar.push(kk[i].grade.marks);
        }
        //const {marksData,GPAData} = this.state;
        const marksData = {...this.state.marksData};
        const GPAData   = {...this.state.GPAData};
        //const {marksData,GPAData} = this.state;
        const {datasets: d1}= marksData
        d1.forEach(ds=>{
            ds['data'] = mar;
        })
        const {datasets: d2}= GPAData
        d2.forEach(ds=>{
            ds['data'] = dat;
        })
        console.log("d1 : ",d1)
        console.log("d2 : ",d2)
        GPAData['datasets'] = d2;
        GPAData['labels'] = lab;
        marksData['datasets'] = d1;
        marksData['labels'] = lab;
        console.log("GPAData : ",GPAData);
        console.log("marksData : ",marksData);
        this.setState({marksData});
        this.setState({GPAData});
        //this.setState()
    }

    butt1 = () =>{
        const jj = localStorage.getItem("grades");
        const kk = jwtDecode(jj);
        //console.log(kk);
        kk.sort((a,b)=>{
            return b.grade.marks-a.grade.marks
        })
        let lab = [];
        let dat = [];
        let mar = [];
        for(let i=0;i<kk.length;i++)
        {
            lab.push(kk[i].student.name);
            dat.push(kk[i].grade.GPA);
            mar.push(kk[i].grade.marks);
        }
        //const {marksData,GPAData} = this.state;
        const marksData = {...this.state.marksData};
        const GPAData   = {...this.state.GPAData};
        //const {marksData,GPAData} = this.state;
        const {datasets: d1}= marksData
        d1.forEach(ds=>{
            ds['data'] = mar;
        })
        const {datasets: d2}= GPAData
        d2.forEach(ds=>{
            ds['data'] = dat;
        })
        console.log("d1 : ",d1)
        console.log("d2 : ",d2)
        GPAData['datasets'] = d2;
        GPAData['labels'] = lab;
        marksData['datasets'] = d1;
        marksData['labels'] = lab;
        console.log("GPAData : ",GPAData);
        console.log("marksData : ",marksData);
        this.setState({marksData});
        this.setState({GPAData});
        //this.setState()
    }

    render() { 
        return (
            <div className="frap">
                <Teachside history={this.props.history}/>
                <div className="greed">
                    <div><button className="signin2" onClick={this.butt}>Ascending</button><button className="signin3" onClick={this.butt1}>Descending</button></div>
                    <div>
                    <Bar
                        data={this.state.marksData}
                        height={300}
                        width={500}
                        options={{maintainAspectRatio:false,
                        title :{
                            display : true,
                            text : "Greatest man in history",
                            fontSize : 30
                        }}}
                    />

                    </div>
                    <div>
                        <Bar
                            data={this.state.GPAData}
                            height={300}
                            width={500}
                            options={{maintainAspectRatio:false}}
                        />
                    </div>
                    <div>
                        <Doughnut
                            data={this.state.GPAdou}
                            height={300}
                            width={300}
                            options={{maintainAspectRatio:false}}
                        />
                    </div>
                    <div>
                        <Doughnut
                            data={this.state.marksDou}
                            height={300}
                            width={500}
                            options={{maintainAspectRatio:false}}
                        />
                    </div>
                    
                </div>
            </div>
          );
    }
}
 
export default Grade;