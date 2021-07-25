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
import questions from './questions'
import Feed from './feedback'
import GiveFeed from './givefeednback'
import Grade from './grades'
const gg = () => {
    return ( 

         <div className="combined">
                
                <div className="container1">
                <Switch>
                    <Route path="/teacher/:name/seetopics" component={cour}/>
                    <Route path="/student/:name/:id/givefeed" component={GiveFeed}/>
                    <Route path="/teacher/:name/feedback" component={Feed}/>
                    <Route path="/teacher/:name/:mane/:year/viewgrades" component={Grade}/>
                    <Route path="/teacher/:name/:mane/:year/moderateQuestion" component={questions}/>
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
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
  <div className="circle-container">
    <div className="circle"></div>
  </div>
</div>
                
                
            </div>
        
     );
}
 
export default gg;
