import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './login'
import Navbar from './navbar'
import dumms from './dummies'

const gg = () => {
    return ( 
        
        <div>
            
            <div>
                <Switch>
                    <Route path="/teacher" component={dumms}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={Navbar}/>
                </Switch>
                
            </div>
        </div>
     );
}
 
export default gg;
