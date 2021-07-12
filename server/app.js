//console.log("Anjum")
const express = require('express');

require('dotenv').config();
const {PO, Course, Student, CO ,Teacher, Question,Problem} = require('./db')
const { Sequelize } = require('sequelize');
const { Op } = require('sequelize');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const sequelize = new Sequelize('postgres://postgres:123@localhost:5432/postgres').authenticate().then(()=>{
    console.log("Connected to db")
})
//app.use(express.static('public')); 
app.use(express.json());
app.use(cors());
//app.use(express.urlencoded({extended : true}));
app.listen(5000, ()=>{
    //res.send("I am here")
    console.log("Connected")
})

passwords = 
[
  {value : '012'},
  {value : '123'},
  {value : '234'},
  {value : '345'},
  {value : '456'},
  {value : '567'},
  {value : '678'},
  {value : '789'},
  {value : '890'},
  {value : '901'}
]



app.get('/', (req,res)=>{
    //console.log(req.)
    //res.send('<p><a href ="https://www.google.com">Nodes</a></p>')
    (async () => {
        const tab =  await Teacher.findAll({
          include :{
            model : Course,
            required : true,
            include : {
              model : Student,
              required : true 
            }
          }
        });
        //console.log(JSON.stringify(tab, null, 2))
        let str = "";
        tab.sort((a,b)=>{
          return a.uid-b.uid;
        });
        /*
        for(t of tab)
        {
          str+= t.name+ " : <br><br>"
          for (crs of t.Courses)
          {
            //str+=JSON.stringify(crs.title+" : "+ crs.name , null, 2);
            str+=crs.title+" : "+ crs.name
            str+= "<br>Year : "+ crs.year.toString()
            str+="<br>"
            crs.Students.sort((a,b)=>{
              return a.student_id-b.student_id;
            });
            for(std of crs.Students)
            {
              str+=std.student_id+" : "+std.name;
              str+= "<br>" 
            }
            str+="<br>"
          }
          str+="<br><br><br>"
        }*/
        //str+=JSON.stringify(tab, null, 2);
        res.send(tab)
        //console.log()
        // Code here
      })();
    
})


/*
app.get('/setQ', (req,res)=>
{
  (async () => {
    const tab =  await Problem.findAll();
    res.send(tab)
  })();
  ;
})
/*
app.post('/problemSet',(req,res)=>{
  (async () => {
    const t =  await Course.findOne({
      where :
      {
        title : req.body.course,
        year : parseInt(req.body.year)
      }
    });
    (async()=>{
      const q = await Question.findOrCreate({
        where :{
          CourseUid : t.uid
        }
      });
      (async()=>{
          //console.log(q[0])
          const prob = await Problem.create(
            {
              numinQ : parseInt(req.body.question_no),
              num : req.body.problem_no,
              Description : req.body.spec,
              marks : req.body.marks,
              QuestionUid : q[0].uid
            }
          );
          //await prob.addQuestion(q);
          //(async ()=>{await q[0].addProblem(prob);});
      })();
    })();
  })().catch(e=>console.log(e));
})



*/

app.post('/login', (req,res)=>
{
  //res.send("");
  console.log(req.body);
  //res.send("<p>dhur</p>");
  (async () => {
    const tab =  await Student.findOne({
      where :
      {
        student_id : req.body.email,
        
      }
    });
    const passtoken = jwt.sign(req.body.password, process.env.ACCESS_TOKEN_SECRET);
    //const passtoken = jwt.sign(req.body.password, process.env.ACCESS_TOKEN_SECRET);
    //console.log(tab.name," ", tab.email,"", passtoken);
    if(passtoken==tab.password)
    {
      console.log("mission successful");
      res.status(201).send(tab);
    }
    else{
      console.log(tab.password,passtoken);
      res.status(404).send();
    }
    //res.send(tab);
  })();

})

/*
app.get('/courses', (req,res)=>{
    //console.log(req.)
    //res.send('<p><a href ="https://www.google.com">Nodes</a></p>')
    (async () => {
        const tab = await Course.findAll();
        //console.log(JSON.stringify(tab, null, 2))
        res.send('<p>'+ JSON.stringify(tab, null, 2)+'</p>')
        //console.log()
        // Code here
      })();
    
})*/