import React, { Component } from 'react';

class Task extends Component{
    render(){
        return(
            <div className="task">
                <p>{this.props.index + 1}.</p>
                <button type="button" className="btn btn-success b">
                    <i className="fas fa-check"></i>
                </button>
                <button type="button" className="btn btn-warning">
                    <i className="fas fa-edit"></i>
                </button>
                <p className="taskname">{this.props.name}</p> 
                <input type="date"></input>
                <button type="button" className="btn btn-danger">
                    <i className="far fa-trash-alt"></i>
                </button>
            
            </div>
        )
    }
}

export default Task;