//console.log("Anjum")
const express = require('express');

require('dotenv').config();
const {PO, Course, Student, CO ,Teacher, Question,Problem, Topic,CO_PO,Topic_CO, Topic_Course, CO_Course, Course_Teach, Mod_Teach} = require('./db')
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
    console.log("Connected")
});


/*

(async()=>{
  const tp = await Problem.findAll({
    attributes: [
      'numinQ',
      [Sequelize.fn('sum', Sequelize.col('marks')), 'total_amount'],
    ],
    group: ['numinQ'],
    where:
    {
      QuestionUid : 1
    }
  });
  console.log(tp[0]);
})();

/*
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

TeachNames =
[
    "Dr. M. Sohel Rahman",    
    "Dr. Mohammed Eunus Ali",    
    "Dr. Mahmuda Naznin",    
    "Dr. Anindya Iqbal",    
    "Dr. Muhammad Abdullah Adnan",    
    "Sukarna Barua",    
    "Dr. Sadia Sharmin"    
];
/*
for(let i=0;i<TeachNames.length;i++)
{
  (async()=>{
    const t = await Teacher.findOne(
      {
        where : {
          name : TeachNames[i]
        }
      }
    );
    if(t!=null)
    {
      const passtoken = jwt.sign(passwords[i].value, process.env.ACCESS_TOKEN_SECRET);
      const myArr = TeachNames[i].split(" ");
      t.password = passtoken;
      if(myArr.length>2)t.email = myArr[1] + myArr[2];
      else t.email =  myArr[0] + myArr[1];
      t.email+= "@teacher.cse.buet.ac.bd"
      await t.save();
    }
  })();
  
}

*/



app.get('/', (req,res)=>{
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
        
        res.send(tab)
      })();
    
});


app.post('/rejadd',(req,res)=>{
  (async () => {
    const tab =  await Topic.update({status : -2},{
      where :
      {
        uid : req.body.uid
      }      
    });
      //console.log(JSON.stringify(tab, null, 2))
    //const tab = [];
    //for(let i=0;i<req.body.cos.length;i++)
    //{
      //parseInt(req.body.pos[i]);
      (async()=>{
        const abc = await Topic_CO.findAll({
          where:{
            TopicUid : req.body.uid,
            status : 0
          }
        });
        (async()=>{
          const antin =  await Topic_Course.update({status : -2},
            {
              where :{
                TopicUid : req.body.uid,
              }
            });
        })().catch(e=>console.log(e));
        for(let i=0;i<abc.length;i++)
        {
          (async()=>{
            const ta =  await Topic_CO.update({status : -2},
            {where:
              {
                TopicUid : req.body.uid,
                COUid : abc[i].COUid,
                status : 0
              }
            });
            
            
            (async()=>{
              const antinopole =  await CO_Course.update({ status : -2},
                {
                  where :{
                    COUid : abc[i].COUid,
                    status : 0
                  }
                });
            })().catch(e=>console.log(e)); 
            (async()=>{
              const antinop =  await CO_PO.update({ flag : -2},
                {
                  where :{
                    COUid : abc[i].COUid,
                    flag : 0
                  }
                });
            })().catch(e=>console.log(e)); 
          })().catch(e=>console.log(e));
        }
        
      })().catch(e=>console.log(e));;
    //}
      
    res.send(tab)
  })().catch(e=>console.log(e));
});


app.post('/appdel',(req,res)=>{
  (async () => {
    const tab =  await Topic.update({status : -2},{
      where :{
        uid : req.body.uid
      }
    });
    res.send(tab);
  })().catch(e=>console.log(e))
  
  /*(async()=>{
    const tab = await Topic_Course.destroy({
      where:{
        TopicUid : req.body.topic.uid,
        CourseUid : req.body.cuid
      }

    });

    /*const tab1 = await Topic_Course.findAll({
      where :{
        TopicUid : req.body.topic.uid
      }
    });

    if(tab1.length===0)
    {
      (async()=>{
        const tab3 = await Topic_CO.findAll({

          where:{
            TopicUid : req.body.topic.uid,
          }
    
        });
        
        const tab2 = await Topic_CO.destroy({
          where:{
            TopicUid : req.body.topic.uid,
          }
    
        });
        
        for(let i=0;i<tab3.length;i++)
        {

          if(tab2.length===0)
          {
            (async()=>{
              const tab = await Topic_Course.destroy({
                where:{
                  TopicUid : req.body.topic.uid,
                  CourseUid : req.body.cuid
                }
          
              });
            })();
          }
        }
      })();

    }*/
  //})();
});

app.post('/rejdel',(req,res)=>{
  (async () => {
    const tab =  await Topic.update({status : 1},{
      where :{
        uid : req.body.uid
      }
    });
    res.send(tab);
  })().catch(e=>console.log(e))
});


app.post('/delreqs',(req,res)=>{
  (async()=>
  {
    const tops = await Topic.findAll({
      include:
      {
        model : Course,
        required : true,
        where :
        {
          uid : req.body.uid
        }
      },
      where :
      {
        status : -1
      }
    });
    res.send(tops);
  })();
});


app.post('/delTopic',(req,res)=>
{
  console.log(req.body);
  
  for(let i=0;i<req.body.uids.length;i++)
  {
    //console.log("anjum"+i);
    (async () => {
      const tab =  await Topic.update({status : -1},{
        where :{
          uid : req.body.uids[i]
        }
      });
    })().catch(e=>console.log(e))
  }
  ;
});

app.post('/appadd',(req,res)=>
{
  (async () => {
    const tab =  await Topic.update({status : 1},{
      where :
      {
        uid : req.body.uid
      }      
    });
      //console.log(JSON.stringify(tab, null, 2))
    //const tab = [];
    //for(let i=0;i<req.body.cos.length;i++)
    //{
      //parseInt(req.body.pos[i]);
      (async()=>{
        const abc = await Topic_CO.findAll({
          where:{
            TopicUid : req.body.uid,
          }
        });
        (async()=>{
          const antin =  await Topic_Course.update({status : 1},
            {
              where :{
                TopicUid : req.body.uid,
              }
            });
        })().catch(e=>console.log(e));
        for(let i=0;i<abc.length;i++)
        {
          (async()=>{
            const ta =  await Topic_CO.update({status : 1},
            {where:
              {
                TopicUid : req.body.uid,
                COUid : abc[i].COUid
              }
            });
            
            
            (async()=>{
              const antinopole =  await CO_Course.update({ status : 1},
                {
                  where :{
                    COUid : abc[i].COUid
                  }
                });
            })().catch(e=>console.log(e)); 
            (async()=>{
              const antinop =  await CO_PO.update({ flag : 1},
                {
                  where :{
                    COUid : abc[i].COUid
                  }
                });
            })().catch(e=>console.log(e)); 
          })().catch(e=>console.log(e));
        }
        
      })().catch(e=>console.log(e));;
    //}
      
    res.send(tab)
  })().catch(e=>console.log(e));
  //res.send();
});


app.post('/createCO',(req,res)=>
{
  console.log(req.body);
  (async () => {
    const tab =  await CO.create({
      name : req.body.name,
      status : req.body.flag
    });
      //console.log(JSON.stringify(tab, null, 2))
    //const tab = [];
    for(let i=0;i<req.body.pos.length;i++)
    {
      //parseInt(req.body.pos[i]);
      (async()=>{
        const ta =  await CO_PO.create({
          COUid : tab.uid,
          POUid : parseInt(req.body.pos[i]),
          flag : 0
        });
        //console.log(tab, ta);
      })();
    }
      
    res.send(tab)
  })();
});


app.post('/createTopic',(req,res)=>
{
  //console.log(req.body);
  (async () => {
    const tab =  await Topic.create({
      name : req.body.name,
      status : 0
    });
      //console.log(JSON.stringify(tab, null, 2))
    //const tab = [];
    for(let i=0;i<req.body.cos.length;i++)
    {
      //parseInt(req.body.pos[i]);
      (async()=>{
        const ta =  await Topic_CO.create({
          TopicUid : tab.uid,
          COUid : parseInt(req.body.cos[i]),
          status : 0
        });
        (async()=>{
          const antin =  await Topic_Course.create({
            TopicUid : tab.uid,
            CourseUid : req.body.cuid,
            status : 0
          });
        })().catch(e=>console.log(e));
        
        (async()=>{
          const antinopole =  await CO_Course.create({
            COUid : parseInt(req.body.cos[i]),
            CourseUid : req.body.cuid,
            status : 0
          });
        })().catch(e=>console.log(e)); 
      })().catch(e=>console.log(e));
    }
      
    res.send(tab)
  })().catch(e=>console.log(e));
  //res.send();
});


app.post('/createCO',(req,res)=>
{
  console.log(req.body);
  (async () => {
    const tab =  await CO.create({
      name : req.body.name,
      status : req.body.flag
    });
      //console.log(JSON.stringify(tab, null, 2))
    //const tab = [];
    for(let i=0;i<req.body.pos.length;i++)
    {
      //parseInt(req.body.pos[i]);
      (async()=>{
        const ta =  await CO_PO.create({
          COUid : tab.uid,
          POUid : parseInt(req.body.pos[i]),
          flag : 0
        });
        //console.log(tab, ta);
      })();
    }
      
    res.send(tab)
  })();
  //res.send();
});

app.post('/getCO', (req,res)=>{
    (async () => {
        const tab =  await CO.findAll({
          include :{
            model : Topic,
            required : true,
            include :{
              model : Course,
              required : true, 
              where : {
                uid : req.body.uid 
              }
            },
            where : {
              [Op.or]: [{ status: 1 }, { status: -1 }] 
            }
          }
        });
        //console.log(JSON.stringify(tab, null, 2))
        
        res.send(tab)
      })();
    
});
app.post('/getTopic', (req,res)=>{
    (async () => {
        const tab =  await Topic.findAll({
          include :{
            model : Course,
            required : true,
            where : {
              uid : req.body.uid 
            }
          },
          [Op.or]: [{ status: 1 }, { status: -1 }]
        });
        //console.log(JSON.stringify(tab, null, 2))
        
        res.send(tab)
      })();
    
});


app.get('/po',(req,res)=>{
  (async () => {
    const tab =  await PO.findAll();
    //console.log(JSON.stringify(tab, null, 2))
    
    res.send(tab);
  })();
});


app.post('/getaddtop',(req,res)=>{
  (async()=>
  {
    const tops = await Topic.findAll({
      include:
      {
        model : Course,
        required : true,
        where :
        {
          uid : req.body.uid
        }
      },
      where :
      {
        status : 0
      }
    });
    res.send(tops);
  })();
})

app.post('/teacher1/:name',(req,res)=>
{
  (async () => {
    /*const tab =  await Teacher.findOne({
      include :{
        model : Course,
        required : true,
        where :
        {
          flag : 1
        }
      },
      where :
      {
        name : req.body.name
      }
    });*/
    //console.log(JSON.stringify(tab, null, 2))
    const tab = await Mod_Teach.findAll({
      where : {
        TeacherUid : req.body.uid
      }
    })
    let courses = [];
    (async()=>{
    for(let i=0;i<tab.length;i++)
    {
        const crs = await Course.findByPk(tab[i].CourseUid); 
        courses.push(crs);
    }
    res.send(courses);
  })();
  })();
});

app.post('/teacher/:name',(req,res)=>
{
  (async () => {
    /*const tab =  await Teacher.findOne({
      include :{
        model : Course,
        required : true,
        where :
        {
          flag : 1
        }
      },
      where :
      {
        name : req.body.name
      }
    });*/
    //console.log(JSON.stringify(tab, null, 2))
    const tab = await Course_Teach.findAll({
      where : {
        flag : 1,
        TeacherUid : req.body.uid
      }
    })
    let courses = [];
    (async()=>{
    for(let i=0;i<tab.length;i++)
    {
      
        const crs = await Course.findByPk(tab[i].CourseUid);
        //console.log(crs);
        courses.push(crs);
      
    }
    //console.log(courses);
    res.send(courses);
  })();
  })();
});

app.post('/teacher/:name/:mane/:year',(req,res)=>
{
  (async () => {
    const tab =  await Course.findOne({
      include :{
        model : Topic,
        required : true,
        where : {
          [Op.or]: [{ status: 1 }, { status: -1 }]
        }
        
      },
      where :
      {
        title : req.body.title,
        year : req.body.year,
      }
    });
    //console.log(JSON.stringify(tab, null, 2))
    
    res.send(tab.Topics)
  })();
});


app.get('/setQ', (req,res)=>
{
  (async () => {
    const tab =  await Problem.findAll();
    res.send(tab)
  })();
  ;
})

app.post('/setQ', (req,res)=>
{
  (async () => {
    const t =  await Course.findOne({
      where :
      {
        title : req.body.title,
        year : parseInt(req.body.year)
      }
    });
    (async()=>{
      const q = await Question.findOne({
        where :{
          CourseUid : t.uid
        }
      });
      
      if(q!==null)res.send(q);
      else 
      {
        (async()=>{
          const pq = await Question.create({
              CourseUid : t.uid
          });
          res.send(pq);
        })();
      }
    })().catch(e=>console.log(e));
  })().catch(e=>console.log(e));
})

app.post('/setp',(req,res)=>{
  (async () => {
    const t =  await Problem.findAll({
      attributes: [
        'numinQ','QuestionUid',
        [Sequelize.fn('sum', Sequelize.col('marks')), 'total_amount']
        
      ],
      group: ['numinQ','QuestionUid'],
      where:
      {
        QuestionUid : req.body.uid
      }
    });
    res.send(t);
  })().catch(e=>console.log(e));
})

app.post('/setpq',(req,res)=>{
  (async () => {
    const t =  await Problem.findAll({
      where:
      {
        numinQ : req.body.numQ,
        QuestionUid : req.body.id
      }
    });
    res.send(t);
  })();
})



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
              marks : parseFloat(req.body.marks),
              QuestionUid : q[0].uid
            }
          );
          //await prob.addQuestion(q);
          //(async ()=>{await q[0].addProblem(prob);});
      })();
    })();
  })().catch(e=>console.log(e));
})





app.post('/login', (req,res)=>
{
  //res.send("");
  //console.log(typeof(req.body.email));
  //res.send("<p>dhur</p>");
  (async () => {
    const tab =  await Teacher.findOne({
      where :
      {
        email : req.body.email,
        
      }
    });
    //console.log(tab);
    if(tab==null)
    {
      (async () => {
        const tab =  await Student.findOne({
          where :
          {
            student_id : req.body.email
          }
        });
        if(tab==null)
        {
          res.status(404).send();
        }
        else
        {
          const passtoken = jwt.sign(req.body.password, process.env.ACCESS_TOKEN_SECRET);
          if(passtoken==tab.password)
          {
            console.log("mission successful");
            res.status(201).send(tab);
          }
          else{
            console.log(tab.password,passtoken);
            res.status(404).send();
          }
        }
      })();
    }
    else
    {
      const passtoken = jwt.sign(req.body.password, process.env.ACCESS_TOKEN_SECRET);
      if(passtoken==tab.password)
      {
        console.log("mission successful");
        res.status(201).send(tab);
      }
      else{
        //console.log(tab.password,passtoken);
        res.status(404).send();
      }
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