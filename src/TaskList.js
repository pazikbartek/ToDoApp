import React, { Component } from 'react';
import Task from './task';
import Edit from './edit';
import AddTask from './AddTask';

class TaskList extends Component{
    state = {
        tasks: [
            {
                Id:0,
                name:"Umyć naczynia",
                category: "Home",
                removed: false,
                done: false
            },
            {
                Id:1,
                name:"Mockup",
                category: "Work",
                removed: false,
                done: false
            },
            {
                Id:2,
                name:"Sprawdzian z angielskiego",
                category: "School",
                removed: false,
                done: false
            },
            {
                Id:3,
                name:"Prasowanie",
                category: "Home",
                removed: false,
                done: false
            },
            {
                Id:4,
                name:"Raport",
                category: "Work",
                removed: false,
                done: false
            },
            {
                Id:5,
                name:"Przyroda",
                category: "School",
                removed: false,
                done: false
            }
        ],

        editorOn: false,
    }

    handleAddTask = () =>{
        this.setState({
            editorOn:true
        })
    }

    handleExit = () =>{
        this.setState({
            editorOn:false
        })
    }

    handleTaskRemove = (e) =>{
        function checkAdult(task) {
            return task.Id == e.target.id;
        }
        const changedTasks = [...this.state.tasks]
        const taskToRemove = changedTasks.findIndex(checkAdult)
        changedTasks[taskToRemove].removed = true;
        this.setState({
            tasks:changedTasks
        })

        setTimeout(()=>{    
            changedTasks.splice(taskToRemove, 1)
            this.setState({
              tasks: changedTasks
            })
        },400)
    }
    
    handleTaskDone = (e) =>{
        console.log('dziala')
        function checkAdult(task) {
            return task.Id == e.target.id;
        }
        const changedTasks = [...this.state.tasks]
        const taskToDone = changedTasks.findIndex(checkAdult)
        changedTasks[taskToDone].done = true;
        this.setState({
            tasks:changedTasks
        })
    }

    render(){
        let taskByCat = [];

        if(this.props.curCat==="All"){
            taskByCat = this.state.tasks.map((task, index) => {
            return (<Task 
                     key={index} 
                     id={task.Id}
                     index={index}
                     name={task.name}
                     style={ task.removed ? [{animation: "visibility 0.5s"}, true] : (task.done ? [{animation: "done 0.3s forwards"}, true, {textDecoration: "line-through"}] : [null])}
                     handleTaskRemove={this.handleTaskRemove}
                     handleTaskDone={this.handleTaskDone}/>)
            })
        }
        else{
            let nr = -1;
            taskByCat = this.state.tasks.map((task, index) => {
                if(task.category===this.props.curCat){
                    nr = nr+1;
                    return (<Task
                            id={task.Id}
                            index={nr}
                            key={index}
                            name={task.name}
                            style={ task.removed ? [{animation: "visibility 0.5s"}, true] : (task.done ? [{animation: "done 0.3s forwards"}, true, {textDecoration: "line-through"}] : [null])}
                            handleTaskRemove={this.handleTaskRemove}
                            handleTaskDone={this.handleTaskDone}/>)
                             
                }
            })
        }

        return (
            <main>
                {this.state.editorOn ? <Edit onclick={this.handleExit} /> : null}
                <AddTask curCat={this.props.curCat} icon={this.props.icon} onclick={this.handleAddTask}/>
                <div className="tasklist">
                    {taskByCat}
                </div>
            </main>
            
        )
    }
}

export default TaskList;