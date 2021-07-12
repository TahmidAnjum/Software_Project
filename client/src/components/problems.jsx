import React, { Component } from 'react'


class Problems extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <span>{this.props.problem.Description}</span>
                <div>
                    <prb/>
                </div>
            </div>
         );
    }
}
 
export default Problems;