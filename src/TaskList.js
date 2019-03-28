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
                date: "",
                time:"",
                removed: false,
                done: false
            },
            {
                Id:1,
                name:"Przygotować raport",
                category: "Work",
                date: "",
                time:"",
                removed: false,
                done: false
            },
            {
                Id:2,
                name:"Sprawdzian z angielskiego",
                category: "School",
                date: "",
                time:"",
                removed: false,
                done: false
            },
        ],

        editorOn: false,
        taskNumber: 0,
        newTask:{
            Id:"",
            name:"",
            date: "",
            time:"",
            category:"",
            done: false,
            removed: false
        }
    }

    handleTaskName = (e) =>{
        const newTask2 = {...this.state.newTask}
        newTask2.name = e.target.value;
        this.setState({
            newTask:newTask2,
        })
    }

    handleDate = (e) =>{
        const newTask2 = {...this.state.newTask}
        if (e.target.type==="date"){
            newTask2.date = e.target.value;
            this.setState({
                newTask:newTask2,
            })
        }
        else{
            newTask2.time = e.target.value;
            this.setState({
                newTask:newTask2,
            })
        }
    }

    handleCategory = (e) =>{
        const newTask2 = {...this.state.newTask}
        newTask2.category = e.target.value;
        this.setState({
            newTask:newTask2,
        })
    }
    handleSubmit = () =>{
        const newTask2 = {...this.state.newTask}
        newTask2.Id = this.state.taskNumber;
        const changedTasks = [...this.state.tasks]
        changedTasks.push(newTask2);
        this.setState({
            tasks: changedTasks,
            taskNumber: this.state.taskNumber + 1,
            editorOn: false
        })
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
            return task.Id.toString() === e.target.id;
        }
        const changedTasks = [...this.state.tasks];
        const taskToRemove = changedTasks.findIndex(checkAdult);
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
        function checkAdult(task) {
            return task.Id.toString() === e.target.id;
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
                     handleTaskDone={this.handleTaskDone}
                     date={`${task.date} ${task.time}`}/>)
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
                            handleTaskDone={this.handleTaskDone}
                            date={`${task.date} ${task.time}`}/>)
                             
                }
                else return null
            })
        }

        return (
            <main>
                {this.state.editorOn ? <Edit 
                    exit={this.handleExit}
                    handleTaskName={this.handleTaskName}
                    valueName={this.state.newTask.name}
                    handleDate={this.handleDate}
                    valueDate={this.state.newTask.date}
                    valueTime={this.state.newTask.time}
                    handleCategory={this.handleCategory}
                    valueCategory={this.state.newTask.category}
                    handleSubmit={this.handleSubmit}
                     /> : null}

                <AddTask curCat={this.props.curCat} icon={this.props.icon} onclick={this.handleAddTask}/>
                <div className="tasklist">
                    {taskByCat}
                </div>
            </main>
            
        )
    }
}

export default TaskList;