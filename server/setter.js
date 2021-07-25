


const {PO, Course, Student, CO, Topic, Teacher, Course_Teach, Grade,Qmod_Teach, Student_Course, Question, Problem,CO_PO, Mod_Teach} = require('./db');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Sequelize } = require('sequelize');
const { Op } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:123@localhost:5432/postgres')
  poNames = [
    "Engineering Knowledge",
    "Problem Analysis",
    "Design/ development of solutions",
    "Investigation",
    "Modern Tool Usage",
    "The Engineer and Society",
    "Environment and Sustainability",
    "Ethics",
    "Individual and Team work",
    "Communication",
    "Project Management and Finance",
    "Lifelong learning"
  ];
  
  courseID =
  [
      "CSE101",    
      "CSE103",    
      "CSE205",    
      "CSE215",    
      "CSE301",    
      "CSE325",    
      "CSE408",    
      "CSE425",    
  ];
  

  Topics=[
    ["Introduction", "Array" ,"I/O" ],
    ["Introduction", "Logic", "Inclusion & Exclusion"],
    ["AVL tree", "BFS Algo" , "Heap"],
    ["Triggers", "Functions" ,"NoSQL"],
    ["Combinatorics", "Probabilty", "Recurrence Relations"],
    ["Class Diagram", "Data Flow Diagram"],
    ["Overview", "ERD presentation"],
    ["Principles", "Interactive System Design"]
  ]
  

  comnam =['North','East', 'West','South'];
  coTop = [
    [[1,2],[3],[1,3]],
    [[1],[1],[1]],
    [[1,2],[2],[1]],
    [[1,2],[1,2,3],[1,4]],
    [[1,2],[2],[1]],
    [[1,2],[1]],
    [[1,2],[2]],
    [[1],[2]]
  ];

  COlist = [
    ['North','East', 'West'],
    ['North'],
    ['North','East'],
    ['North','East', 'West','South'],
    ['North','East'],
    ['North','East'],
    ['North','East'],
    ['North','East']
  ];


  passwords = 
  [
    '012',
    '123',
    '234',
    '345',
    '456',
    '567',
    '678',
    '789',
    '890',
    '901'
  ];



  /*


  (async ()=>{
    const co = await CO.findAll({
      where :
      {
        name : 'North_CSE103'
      }
    });

    //console.log(co)
  })().catch((e)=>{console.log(e)});  
  */


  
  
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
  
  
  
  
  
  coNames = [
    "Engineering Knowledge",
    "Problem Analysis",
    "Design/ development of solutions",
    "Investigation",
    "Modern Tool Usage",
    "The Engineer and Society",
    "Environment and Sustainability",
    "Ethics",
    "Individual and Team work",
    "Communication",
    "Project Management and Finance",
    "Lifelong learning"
  ];
  
  
  
  
  COPO = [
    [[1,2],[4], [3,6]],
    [[1,2]],
    [[1,2],[4]],
    [[1,2],[4],[3,6],[12]],
    [[1,2],[4]],
    [[1,2],[4]],
    [[1,2],[4]],
    [[1,2],[4]]

  ]
  TeCour = [
    [[20, courseID[6]],[19, courseID[1]],[18, courseID[1]],[20, courseID[4]]],//Sohel Sir
    [[20, courseID[6]],[18, courseID[3]]],//Eunus Sir
    [[20, courseID[6]],[17, courseID[1]],[19, courseID[4]]],//Mahmuda Ma'am
    [[20, courseID[6]],[19, courseID[5]]],//Anindya Sir
    [[20, courseID[6]],[19, courseID[4]]],//Adnan Sir
    [[20, courseID[6]],[17, courseID[0]],[18, courseID[2]]],//Sukarna Sir
    [[20, courseID[6]],[20, courseID[7]]]//Sadia mam 
  ]
  //console.log(TeCour[0].length)
  ModCour = [
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]]
  ]
  SetQu = [
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]]
  ]
  ModQu = [
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]]
  ]
  
  
  
  courseNames =
  [
    "Structured Programming Language",    
    "Discrete Mathematics",    
    "Data Stuctures and Algorithms-I",    
    "Database",    
    "Concrete Mathematics",    
    "Information System and Desingn",    
    "Software Project Development",    
    "Human Computer Interaction",    
  ]
  TeachDes =
  [
    "Professor",   
    "Professor",   
    "Professor",   
    "Assoc. Professor",   
    "Assoc. Professor",   
    "Assist. Professor",   
    "Assist. Professor"   
  ]

  
  credHours =[
    3.00,
    4.00,
    3.00,
    3.00,
    3.00,
    2.00,
    1.50,
    3.00
  ]
  stdNames =[
    "Ashraful",
    "Zawad",
    "Bishwa",
    "Redwan",
    "Navid",
    "Avijit",
    "Shahrar",
    "Fardin",
    "Hisham",
    "Rakib"
  ];


  const getGPA = (num) =>{
    if(num>=80) return 4.00;
    if(num>=75) return 3.75;
    if(num>=70) return 3.50;
    if(num>=65) return 3.25;
    if(num>=60) return 3.00;
    if(num>=55) return 2.75;
    if(num>=50) return 2.50;
    if(num>=45) return 2.25;
    if(num>=40) return 2.00;
    if(num<40)  return 0.00;
  }


  (async()=>{
    const std = await Student_Course.findAll({
      
        where :
        {
          CourseUid : 19
        }
      

    });
    let arr = [];
    (async()=>{
      for(let i=0; i<std.length;i++)
      {
        const grd = await Grade.findOne({
          where :{
            StudentCurseUid : std[i].uid
          }
        });
        const stdnt = await Student.findByPk(std[i].StudentUid);
        //console.log(stdnt);
        let ret ={student :{}, grade:{}};
        ret.student = stdnt;
        ret.grade = grd;
        arr.push(ret);
        //console.log(ret);
      }
      console.log(arr);
    })();
  })();

 
  /*
  (async()=>{
    const co = await CO_PO.update({flag : 1},
      {
        where:{
          flag : 0
        }
      })
  })();
*/
/*
  (async()=>{
    const stds = await Student.findAll({
      where : {
        level : 4
      }
    });
    //console.log(stds.length);
    (async()=>{
      for(let i=0;i<stds.length;i++)
      {
        const stcr = await Student_Course.findAll({
          where:{
            StudentUid : stds[i].uid,
          }
        });
        (async()=>{
          for(let j=0;j<stcr.length;j++)
          {
            let num = Math.floor(Math.random() * (100 - 70) ) + 70;
            const grade = await Grade.create({
              marks : num,
              GPA : getGPA(num),
              StudentCurseUid : stcr[j].uid
            });
          }
        })();
        //console.log(stds[i].uid,stcr.length); 
      }
    })();
  })();


/*
  (async()=>{
    const crs = await Course.findAll();
    for(let i=0;i<crs.length;i++)
    {
      //console.log(crs[i].name);
      (async()=>
      {
        const crs_teach = await Qmod_Teach.create({
          flag : 2,
          CourseUid : crs[i].uid,
          TeacherUid : 2
        })
      })();
    }
  })();

/*
  for(let i=0;i<TeachNames.length;i++)
  {
    
    (async() =>{
    const tp = await Teacher.findOne({
      where:
        {
          name : TeachNames[i]
        }
      });
      for(let j=0;j<TeCour[i].length;j++)
      {
        (async() =>{
          const tab = await Course.findAll({
            where:{
              title :  TeCour[i][j][1],
              year : TeCour[i][j][0]+2000
            }
            
          });
          //console.log(i," :\n ",tab,"\n\n\n")
          (async() =>{
            await tp.addCourse(tab);
          })().catch((e)=>{console.log(e)});
          
          
          tab.forEach((t)=>{
            (async() =>{
              //await t.addTeacher(tp);
              const cour_teac = await Course_Teach.update({flag : 1},
                {
                  where :{
                    TeacherUID : tp.uid,
                    CourseUID : t.uid
                  }
                })
            })().catch((e)=>{console.log(e)});
          })
        })().catch((e)=>{console.log(e)});
      }
    })().catch((e)=>{console.log(e)});
    //}
    
    
  }

/*
  for(let i=1;i<=12;i++)
  {
    (async() =>{
      const po = await PO.findByPk(i);
      console.log(po)
    })();
  }

/*
for(let i =0;i<coTop.length;i++)
{
  for(let j=0;j<coTop[i].length;j++)//console.log(coTop[i][j].length,Topics[i][j]);
  {
    (async()=>{
      const t = await Topic.findOne({
        include:
        {
          model :Course,
          required : true,
          where :
          {
            title : courseID[i] 
          }
        },
        where :
        {
          name : Topics[i][j]
        }
      });


      for(let k=0;k<coTop[i][j].length;k++)
      {
        //console.log(comnam[coTop[i][j][k]-1],i,j,k)
        (async()=>
        {
          const co = await CO.findOne({
            where :
            {
              name : comnam[coTop[i][j][k]-1]+'_'+courseID[i]
            }
          });
          //console.log(co.name, co.uid,i,j,k);
          (async()=>{await t.addCO(co)})();
          (async()=>{await co.addTopic(t)})();
        })();
      }
      //for(let pi=0;pi<t.Courses.length;pi++)
      //{
      //  if(t.Courses[pi].title==courseID[i]) console.log(pi,courseID[i]);
      //}
      //console.log(10*i+j,t.Courses);
    })();
  }
  console.log();
}



/*
(async()=>{
    const tp = await Problem.findAll({
      attributes: [
        'numinQ',
        [sequelize.fn('sum', sequelize.col('marks')), 'total_amount'],
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
  for(i in coTop)
  {
    for(j in Topics[i])
    {
      (async()=>{
        const tp = await Topic.findAll({
          include :
          {
            model : Course,
            required : true,
            where :
            {
              title : courseID[i]
            }
          },
          where :
          {
            name : Topics[i][j]
          }
        });
        tp.forEach((top)=>
        {
          for(k in coTop[i][j])
          {
            //console.log(i,j,k,COlist[i][coTop[i][j][k]-1])
            (async()=>{
              const co = await CO.findAll({
                where :
                {
                  name : COlist[i][coTop[i][j][k]-1]+'_'+courseID[i]
                }
              });
              for (cop of co)
              {
                  //console.log(cop.name);
                  (async ()=> await top.addCO(cop))().catch((e)=>{console.log(e)});;
                  (async ()=> await cop.addTopic(top))().catch((e)=>{console.log(e)});;
                //console.log(tp.length," ",cop.name)
              }
            })().catch((e)=>{console.log(e)});;
          }
        })
        //console.log(co.length);
        
      })().catch((e)=>{console.log(e)});
    }
  }
/*

  (async()=>{
    const co = await CO.findAll({
      include :{
        model : Course,
        required : true,
        include :{
          model : Topic,
          required : true
        }
      }
    });
    co.forEach((c)=>{
      for(course of c.Courses)
      {
        for(tp of course.Topics)
        {
          //console.log(tp)
        }
      }
    })
  })().catch((e)=>{console.log(e)});
/*
  (async ()=>{

    const course = await Course.findAll({
      include :{
        model : CO,
        required : true,
        include : {
          model : PO,
          required : true
        }
      },
      where : {
        title : 'CSE101'
      }
    })
    //console.log(course)
    for(let css of course)
    {
      for(cos of css.COs)
      {
        for(pos of cos.POs) console.log(css.name, css.year,cos.name, pos.name)
      }
    }
  })();
/*
for(let i =0;i<courseID.length;i++){
  (async ()=>{
   

    for(let j in COlist[i]){
      //console.log(i,j,COlist[i][j])
      (async() =>{
        const co = await CO.findOne({where:{name:COlist[i][j]+ "_" +courseID[i]}}); 
        for(let k in COPO[i][j])
        {
          (async() =>{
            const po = await PO.findAll({
              where :{
                name : poNames[COPO[i][j][k]-1]
              }
            });

            (async() =>{await co.addPO(po)})().catch((e)=>{console.log(e)});;
            //po.forEach((p)=>{(async() =>{await p.addCO(co)})().catch((e)=>{console.log(e)});;})
          })().catch((e)=>{console.log(e)});;  
          //console.log(poNames[COPO[i][j][k]-1])
        }
         
      })().catch((e)=>{console.log(e)});;
      
    }

  })().catch((e)=>{console.log(e)});;
}

  /*

for(let i =0;i<courseID.length;i++){
  (async ()=>{
    const tab = await Course.findAll({
      where :{
        title : courseID[i]
      }
    });

    for(let j in COlist[i]){
      //console.log(i,j,COlist[i][j])
      (async() =>{
        const co = await CO.create({name:COlist[i][j]+ "_" +courseID[i]}); 
        for(let k in COPO[i][j])
        {
          (async() =>{
            const po = await PO.findAll({
              where :{
                name : poNames[COPO[i][j][k]-1]
              }
            });

            (async() =>{await co.addPO(po)})().catch((e)=>{console.log(e)});;
            po.forEach((p)=>{(async() =>{await p.addCO(co)})().catch((e)=>{console.log(e)});;})
          })().catch((e)=>{console.log(e)});;  
          //console.log(poNames[COPO[i][j][k]-1])
        }
        (async() =>{await co.addCourse(tab)})().catch((e)=>{console.log(e)});;
        tab.forEach((p)=>{(async() =>{await p.addCO(co)})().catch((e)=>{console.log(e)});;})  
      })().catch((e)=>{console.log(e)});;
      
    }

  })().catch((e)=>{console.log(e)});;
}
/*
  let i =0;

  (async() =>{
    const tab = await Student.findAll({
      include :{ 
      model : Course,
      require : true,
      where :{
        year : {
          [Op.lt] : 2020
        }
      }
    },
    where :{
      student_id : 
       1605005
    }
    });
  
    let i=0;
    tab.forEach((t)=>
    {
      for(f of t.Courses){
        (async ()=>{
          const setup = await Student_Course.findAll({
            where:{
              StudentUid : t.uid,
              CourseUid : f.uid
            }
          })
          console.log(setup)
        })();
      }
    })
  })().catch((e)=>{console.log(e)});
  

/*
  (async() =>{
    const tab = await CO_PO.update({flag : 1},{
      where :{
        flag : null
      }
    });
    tab.forEach((t)=>
    {
      console.log(t)
    })
  })().catch((e)=>{console.log(e)});
  
/*
  (async() =>{
    const tab = await CO.update({status : 1},{
      where :{
        status : null
      }
    });
    tab.forEach((t)=>
    {
      console.log(t)
    })
  })().catch((e)=>{console.log(e)});
  
  /*
  (async() =>{
    const tab = await Course_Teach.update({flag : 1},{
      where :{
        flag : null
      }
    });
    tab.forEach((t)=>
    {
      console.log(t)
    })
  })().catch((e)=>{console.log(e)});
  

/*
  for(let i=0;i<TeachNames.length;i++)
  {
    var tpc = [];
    //for(let j =0; j<Topics[i].length;j++)
    //{
    (async() =>{
    const tp = await Teacher.create({name : TeachNames[i], designation : TeachDes[i], email : TeachNames+'@teacher.cse.buet.ac.bd'});
      for(let j=0;j<TeCour[i].length;j++)
      {
        (async() =>{
          const tab = await Course.findAll({
            where:{
              title :  TeCour[i][j][1],
              year : TeCour[i][j][0]+2000
            }
            
          });
          //console.log(i," :\n ",tab,"\n\n\n")
          (async() =>{
            await tp.addCourse(tab);
          })().catch((e)=>{console.log(e)});
          
          
          tab.forEach((t)=>{
            (async() =>{
              //await t.addTeacher(tp);
              const cour_teac = await Course_Teach.update({flag : 1},
                {
                  where :{
                    TeacherUID : tp.uid,
                    CourseUID : t.uid
                  }
                })
            })().catch((e)=>{console.log(e)});
          })
        })().catch((e)=>{console.log(e)});
      }
    })().catch((e)=>{console.log(e)});
    //}
    
    
  }


  
/*



  for(let i=0;i<Topics.length;i++)
  {
    var tpc = [];
    for(let j =0; j<Topics[i].length;j++)
    {
      (async() =>{
        const tp = await Topic.create({name : Topics[i][j] });
        (async() =>{
          const tab = await Course.findAll({
            where:{
              title : courseID[i] 
            }
          });
          await tp.addCourse(tab);
          tab.forEach((t)=>{
            (async() =>{
              await t.addTopic(tp);
            })();
          })
        })();
      })();
    }
    
    
  }
/*
  (async () => {
    for(let i=0;i<4;i++)
    {
      const tab = await Course.findAll({
        where:{
          year : 2017 + i 
        }
      });
      tab.forEach((t)=>{
        
        (async () => {
          let str = t.title
          let lvl = Math.floor(parseInt(str.substring(3))/100) 
          //console.log(lvl,'\n\n\n')
          const std = await Student.findAll({
            where:{
              [Op.and]:
              {
                //level : lvl ,
                student_id :{
                  [Op.and]:{
                    [Op.lt]:(18-lvl+i)*100000,
                    [Op.gt]:(17-lvl+i)*100000
                  }
                }
              }
            }
          })
          
          
          
          await t.addStudent(std)
          std.forEach((st)=>
          {
            (async () => {
              await st.addCourse(t)
            })();
          })
          //console.log(i,t.title," ",t.name,std.length,"\n")  
        })();
        
      })
    }
    //console.log(JSON.stringify(tab, null, 2))
    //res.send('<p>'+ JSON.stringify(tab, null, 2)+'</p>')
    //console.log()
    // Code here
  })();
  

/*

  let  roll = 1605000;




  
  for(let i=0;i<4;i++)
  {
    for(let j=0;j<stdNames.length;j++)
    {
      let tmp = roll+i*100000+j+1;
      (async () => {
      
        //await sequelize.sync({ force: true });
        //await Course.create({name: courseNames[j], title : courseID[j], year : 2016 + 4 - i , credit_hours : credHours[j]});
        // Code here
        await Student.create({name: stdNames[j]+"_"+(i+16).toString(), student_id : tmp, level : 4-i, term : 1, email : tmp.toString()+'@ugrad.cse.buet.ac.bd'});
      })().catch((e)=>{
        console.log(e)
      });
      }
  }
  /*
  for (let i=1; i<=4; i++)
  {
    for(let j=1; j<=i*2; j++)
    {
      
      (async () => {
        
        //await sequelize.sync({ force: true });
        await Course.create({name: courseNames[j-1], title : courseID[j-1], year : 2016+i, credit_hours : credHours[j-1]});
        //console.log("Anjum : ", j);
        // Code here
      })().catch((e)=>{
        console.log(e)
      });
    }
  }
 /*
let i=0
  while(i<poNames.length && i>=0){
    let po ; 
    (async () => {
      
      //await sequelize.sync({ force: true });
      await PO.create({name: poNames[i++]});
      // Code here
    })().catch((e)=>{
      console.log(e)
    });
  //pos.push(po.toJSON())
  }
  
  let pos = [];
  
   
 
 
  //const tab;
  (async () => {
    const tab = await PO.findAll();
    console.log(JSON.stringify(tab, null, 2))
  
    //console.log()
    // Code here
  })();
  
  
  /*
  pos.forEach(element => {
    console.log(element.name)
  });
  
  /*
  try {
      sequelize.authenticate().then(()=>{
        console.log('Connection has been established successfully.');
      });
     
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }*/