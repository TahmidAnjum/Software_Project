import React, { Component } from 'react'


class Problems extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <span>{this.props.problem.numinQ} {this.props.problem.num} {this.props.problem.Description}</span>
            </div>
         );
    }
}
 
export default Problems;