import React, { Component } from 'react';

class Edit extends Component{
    render(){
        return(
            <div className="editor">
                <button type="button" onClick={this.props.exit} className="btn btn-danger b"><i className="fas fa-times"></i></button>
                <div className="form">
                    <label htmlFor="task">Task name:</label>
                    <input className="form-control" onChange={this.props.handleTaskName} value={this.props.valueName}  type="text" placeholder="Write your task..." id="task"/>

                    Deadline: <br />
                    <input type="date" onChange={this.props.handleDate} value={this.props.valueDate} /> 
                    <input type="time" onChange={this.props.handleDate} value={this.props.valueTime}/> <br/>

                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Choose list:</label>
                    <select className="custom-select mr-sm-2" onChange={this.props.handleCategory} value={this.props.valueCategory} id="inlineFormCustomSelect">
                        <option value="Work">Work</option>
                        <option value="School">School</option>
                        <option value="Home">Home</option>
                    </select>
                </div>
                <button type="button" onClick={this.props.handleSubmit} className="btn btn-primary b">Submit</button>
            </div>
        )
    }
}

export default Edit;