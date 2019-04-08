import React, { Component } from 'react';

class Edit extends Component{
    render(){
        return(
            <div className="editor">
                <button type="button" onClick={this.props.exit} className="btn btn-danger b"><i className="fas fa-times"></i></button>
                <div className="form">
                     
                    <label htmlFor="task">Task name:</label> {this.props.maxLength ? <span className="warning"><b> Maximum length is 55 characters!</b></span> : null} 
                    <input maxLength={55} className="form-control" onChange={this.props.handleTaskName} value={this.props.valueName}  type="text" placeholder="Write your task..." id="task"/>
                    
                    Deadline: <br />
                    <input type="date" onChange={this.props.handleDate} value={this.props.valueDate} /> 
                    <input type="time" onChange={this.props.handleDate} value={this.props.valueTime}/>
                    {this.props.dateGiven&&this.props.timeGiven ? null:<span className="datewarning"><b> Enter the date</b></span>} <br/>

                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Choose list:</label>
                    <select className="custom-select mr-sm-2" onChange={this.props.handleCategory} value={this.props.valueCategory} id="inlineFormCustomSelect">
                        <option value="Work" defaultValue="Work">Work</option>
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