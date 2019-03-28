import React, { Component } from 'react';

class Edit extends Component{
    render(){
        return(
            <div className="editor">
                <button type="button" onClick={this.props.onclick} className="btn btn-danger b"><i className="fas fa-times"></i></button>
                <div className="form">
                    <label htmlFor="task">Task name:</label>
                    <input className="form-control" type="text" placeholder="Write your task..." id="task"/>

                    Deadline: <br />
                    <input type="date" /> <input type="time"/> <br/>

                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Choose list:</label>
                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option value="1">Work</option>
                        <option value="2">School</option>
                        <option value="3">Home</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Edit;