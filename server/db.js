const { Sequelize, DataTypes, Model} = require('sequelize');
const { Op} = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:123@localhost:5432/postgres')


const PO = sequelize.define('PO', {
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },

  name : {
    type: DataTypes.STRING,
    unique : true
  }
},{
  timestamps  :false
});

const Course = sequelize.define('Course', {
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },

  title : {
    type: DataTypes.STRING,
    //unique : true
  },
  name : {
    type: DataTypes.STRING,
    //unique : true
  },
  credit_hours :{
    type: DataTypes.DOUBLE,
  },
  year : {
    type: DataTypes.INTEGER,
    //unique : true
  }
  

},{
  timestamps  :false
});

const Student = sequelize.define('Student', {
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },

  student_id : {
    type: DataTypes.INTEGER,
    //unique : true
  },
  name : {
    type: DataTypes.STRING,
    //unique : true
  },
  email: {
    type: DataTypes.STRING,
    //unique : true
  }, 
  level : {
    type: DataTypes.INTEGER,
    //unique : true
  },
  term : {
    type: DataTypes.INTEGER,
    //unique : true
  },
  password :{
    type: DataTypes.STRING
  }

},{
  timestamps  :false
});

const Teacher = sequelize.define('Teacher', {
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },

  
  name : {
    type: DataTypes.STRING,
    //unique : true
  },
  email: {
    type: DataTypes.STRING,
    //unique : true
  }, 
  designation: {
    type: DataTypes.STRING,
    //unique : true
  }, 
  password :{
    type: DataTypes.STRING
  }

},{
  timestamps  :false
});




const CO = sequelize.define('CO', {
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },

  name : {
    type: DataTypes.STRING,
  },
  status :
  {
    type : DataTypes.INTEGER,
    defaultValue :1,
    primaryKey: true
  }
},{
  timestamps  :false
});

const Topic = sequelize.define('Topic', {
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },

  name : {
    type: DataTypes.STRING,
  },
  status :
  {
    type : DataTypes.INTEGER,
    defaultValue :1,
    primaryKey: true
  }
},{
  timestamps  :false
});


const Question = sequelize.define('Question', {
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },

},{
  timestamps  :false
});


const Problem = sequelize.define('Problem', {
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },

  numinQ :{
    type: DataTypes.INTEGER,
  },

  num :{
    type : DataTypes.STRING,
  },
  Description :{
    type : DataTypes.STRING,
  },

  marks : {
    type : DataTypes.DOUBLE
  }
},{
  timestamps  :false
});

const Mark = sequelize.define('Mark', {
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },

  marks : {
    type : DataTypes.DOUBLE
  }
},{
  timestamps  :false
});


const Grade = sequelize.define('Grade',{
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  }, 
  marks : {
    type : DataTypes.DOUBLE
  },
  GPA : {
    type : DataTypes.DOUBLE
  }
},{ 
  timestamps  :false
});





const Feedback = sequelize.define('Feedback', {
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },

  description : {
    type : DataTypes.STRING
  },
  flag :
  {
    type : DataTypes.INTEGER
  }
},{
  timestamps  :false
});



const Notification = sequelize.define('Notification', {
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },

  teachuid : {
    type : DataTypes.INTEGER
  },
  flag :
  {
    type : DataTypes.INTEGER
  }
},{
  timestamps  :false
});




const Course_Teach = sequelize.define('Curse_Teach', {
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
    flag : {
      type : DataTypes.INTEGER,
    }
},{
  timestamps  :false
});



const Mod_Teach = sequelize.define('Mod_Teach', {
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
    flag : {
      type : DataTypes.INTEGER,
    }
},{
  timestamps  :false
});



const Qmod_Teach = sequelize.define('Qmod_Teach', {
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
    flag : {
      type : DataTypes.INTEGER,
    }
},{
  timestamps  :false
});



const Qset_Teach = sequelize.define('Qset_Teach', {
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
    flag : {
      type : DataTypes.INTEGER,
    }
},{
  timestamps  :false
});




const Student_Course = sequelize.define('Student_Curse',{
  uid : {
    type: DataTypes.INTEGER,
    primaryKey : true,
    autoIncrement : true
  }
},{
  timestamps  :false
});

const Topic_Course = sequelize.define('Topic_Curse', {
  status :
  {
    type : DataTypes.INTEGER,
    defaultValue :1,
    primaryKey: true
  }
},{
  timestamps  :false
  
});

const CO_Course = sequelize.define('CO_Curse', {
  status :
  {
    type : DataTypes.INTEGER,
    defaultValue :1,
    primaryKey: true
  }
},{
  timestamps  :false
});

const Topic_CO = sequelize.define('Topic_CO', {
  status :
  {
    type : DataTypes.INTEGER,
    defaultValue :1,
    primaryKey: true
  }
},{
  timestamps  :false
});

const Problem_CO = sequelize.define('Problem_CO', {},{
  timestamps  :false
});

const CO_PO = sequelize.define('CO_PO', {
  uid : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  flag : {
    type : DataTypes.INTEGER,
    defaultValue : 1,
  }

},{
  timestamps  :false
});


Course.hasMany(Question)
Question.belongsTo(Course)

Question.hasMany(Problem)
Problem.belongsTo(Question)


Teacher.belongsToMany(Course, {through: Course_Teach})
Course.belongsToMany(Teacher, {through: Course_Teach})

Teacher.belongsToMany(Course, {through: Mod_Teach})
Course.belongsToMany(Teacher, {through: Mod_Teach})

Teacher.belongsToMany(Course, {through: Qmod_Teach})
Course.belongsToMany(Teacher, {through: Qmod_Teach})

Teacher.belongsToMany(Course, {through: Qset_Teach})
Course.belongsToMany(Teacher, {through: Qset_Teach})



CO.belongsToMany(Course, {through : CO_Course});
Course.belongsToMany(CO, {through : CO_Course});

Student.belongsToMany(Course, {through : Student_Course});
Course.belongsToMany(Student, {through : Student_Course});

Topic.belongsToMany(Course, {through : Topic_Course});
Course.belongsToMany(Topic, {through : Topic_Course});

Topic.belongsToMany(CO, {through : Topic_CO});
CO.belongsToMany(Topic, {through : Topic_CO});

CO.belongsToMany(PO, {through : CO_PO});
PO.belongsToMany(CO, {through : CO_PO});

Problem.belongsToMany(CO, {through : Problem_CO });
CO.belongsToMany(Problem, {through : Problem_CO });

Grade.belongsTo(Student_Course);
Student_Course.hasOne(Grade);


Feedback.belongsTo(Student);
Student.hasMany(Feedback);

Feedback.belongsTo(Teacher);
Teacher.hasMany(Feedback);

Feedback.belongsTo(Course);
Course.hasMany(Feedback);



(async () => {
  await sequelize.sync({ alter : true });
})().catch((e)=>{
  console.log(e)
});


 
module.exports = {PO ,Course ,Student, CO, Topic, Teacher,Qmod_Teach ,Course_Teach, Grade, Feedback, Student_Course, Question, Problem, CO_PO, Topic_CO,Topic_Course,CO_Course,Mod_Teach}