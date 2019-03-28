import React from 'react';

const AddTask = (props) => {
    return(
        <div className="addtask">
            <h1> {props.curCat} <i className={props.icon}></i> </h1>
            <button type="button" className="btn btn-success" onClick={props.onclick}>
                Add task &nbsp; <i className="fas fa-plus"></i>
            </button>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" /> 
                <label className="custom-control-label" htmlFor="customCheck1">Sort by date</label>
            </div>
        </div>
    )
}

export default AddTask;