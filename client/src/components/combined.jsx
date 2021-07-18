import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './login'
import Navbar from './navbar'
//import dumms from './dummies'
import std from './student'
import tch from './teacher'
import crs from './course';
import ques from './problem';
import Topic from './topic'
import addTop from './addTopic'
import delTop from './deleteTop'
import cour from './courses';
import modeCour from './moderate'
const gg = () => {
    return ( 
        
         <div className="combined">
                <Switch>
                    <Route path="/teacher/:name/seetopics" component={cour}/>
                    <Route path="/teacher/:name/:mane/:year/moderatecourse" component={modeCour}/>
                    <Route path="/teacher/:name/:mane/:year/topics" component={Topic}/>
                    <Route path="/teacher/:name/:mane/:year/addtopics" component={addTop}/>
                    <Route path="/teacher/:name/:mane/:year/deltopics" component={delTop}/>
                    <Route path="/teacher/:name/:mane/:year/question" component={ques}/>
                    <Route path="/teacher/:name/:mane/:year" component={crs}/>
                    <Route path="/teacher/:name" component={tch}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/student/:name" component={std}/>
                    <Route path="/" component={Navbar}/>
                </Switch>
                
            </div>
        
     );
}
 
export default gg;
