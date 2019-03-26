import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList'

class List extends Component{
    render(){
        return(
            <main>
                <AddTask />
                <TaskList />
            </main>
        )
    }
}

export default List;