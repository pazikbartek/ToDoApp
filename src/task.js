import React, { Component } from 'react';

class Task extends Component{
    render(){
        return(
            <div className="task" style={this.props.style[0]} >
                <p>{this.props.index + 1}.</p>
                <button type="button" onClick={this.props.handleTaskDone} disabled={this.props.style[1]} id={this.props.id}  className="btn btn-success b">
                    <i className="fas fa-check" id={this.props.id}></i>
                </button>
                <p className="taskname" style={this.props.style[2]}>{this.props.name}</p> 
                <p className="deadline">Deadline: <br /> <b> {this.props.date} </b></p>
                <button type="button" id={this.props.id} onClick={this.props.handleTaskRemove} className="btn btn-danger">
                    <i className="far fa-trash-alt" id={this.props.id}></i>
                </button>
            
            </div>
        )
    }
}


export default Task;