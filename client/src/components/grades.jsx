import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2'
import Teachside from './teachside';
class Grade extends Component {
    constructor(props){
        super(props);
        const jj = localStorage.getItem("grades");
        const kk = jwtDecode(jj);
        console.log(kk);
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
        for(let i=0;i<kk.length;i++)
        {
            let r = (Math.floor(Math.random() * (255 - 70) ) + 70).toString();
            let g = (Math.floor(Math.random() * (255 - 70) ) + 70).toString();
            let b = (Math.floor(Math.random() * (255 - 70) ) + 70).toString();
            lab.push(kk[i].student.name);
            dat.push(kk[i].grade.GPA);
            mar.push(kk[i].grade.marks);
            bgc1.push(`rgba(${r},${g},${b},0.7)`)
            bgc2.push(`rgba(${g},${b},${r},0.7)`)
            brc1.push(`rgba(${r},${g},${b},1)`)
            brc2.push(`rgba(${g},${b},${r},1)`)

        }
        this.state={
            GPAData : {
                labels: lab,//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                            datasets :[{
                                label: 'GPA achieved',
            data: dat,//[12, 19, 3, 5, 2, 3],
            backgroundColor: bgc1,/*[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],*/
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
            }
        }
    }
    render() { 
        return (
            <div className="frap">
                <Teachside history={this.props.history}/>
                <div className="greed">
                    <div>
                    <Bar
                        data={this.state.marksData}
                        height={400}
                        width={600}
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
                            height={400}
                            width={600}
                            options={{maintainAspectRatio:false}}
                        />
                    </div>
                </div>
            </div>
          );
    }
}
 
export default Grade;