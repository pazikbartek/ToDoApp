import React, { Component } from 'react';
import Task from './task';
import Edit from './edit';
import AddTask from './AddTask';

class TaskList extends Component{
    state = {
        tasks: [
            {
                Id:1,
                name:"Umyć naczynia",
                category: "Home",
            },
            {
                Id:2,
                name:"Mockup",
                category: "Work",
            },
            {
                Id:3,
                name:"Sprawdzian z angielskiego",
                category: "School",
            },
            {
                Id:4,
                name:"Prasowanie",
                category: "Home",
            },
            {
                Id:5,
                name:"Raport",
                category: "Work",
            },
            {
                Id:6,
                name:"Przyroda",
                category: "School",
            }
        ],

        editorOn: true,
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


    render(){
        let taskByCat = [];

        if(this.props.curCat==="All"){
            taskByCat = this.state.tasks.map((task, index) => <Task index={index} key={index} name={task.name}/>)
        }

        else{
            taskByCat = this.state.tasks.map((task, index) => {
                if(task.category===this.props.curCat){
                    return <Task index={index} key={index} name={task.name} />
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