import React, { Component } from 'react';

class Task extends Component{
    render(){
        return(
            <div className="task">
                <p>1</p>
                <button type="button" className="btn btn-success b">
                    <i class="fas fa-check"></i>
                </button>
                <button type="button" className="btn btn-warning">
                    <i class="fas fa-edit"></i>
                </button>
                
                <p className="taskname">Zrobić zrobić zrobić zrobić zrobić</p> 
                <input type="date"></input>
                <button type="button" className="btn btn-danger">
                    <i class="far fa-trash-alt"></i>
                </button>

            </div>
        )
    }
}

export default Task;