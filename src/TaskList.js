import React, { Component } from 'react';
import Task from './task'

class TaskList extends Component{
    render(){
        return (
            <div class="tasklist">
                <Task/>
                <Task/>
            </div>
            
        )
    }

}

export default TaskList;