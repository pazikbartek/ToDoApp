import React, { Component } from 'react';

class Menu extends Component{
    render(){
        return(
            <nav>
                <h3> Your lists: </h3>

                <button 
                    type="button"
                    onClick={() => this.props.onclick("Work", "fas fa-laptop")}
                    className="btn btn-primary"
                >
                    Work &nbsp; <i className="fas fa-laptop"></i>
                </button> <br/> 

                <button 
                    type="button"
                    onClick={() => this.props.onclick("School", "fas fa-book-open")}
                    className="btn btn-primary"
                >
                    School &nbsp; <i className="fas fa-book-open"></i>
                </button> < br/>

                <button
                    type="button" 
                    onClick={() => this.props.onclick("Home", "fas fa-home")} 
                    className="btn btn-primary"
                 >
                    Home &nbsp; <i className="fas fa-home"></i>
                </button> < br/>

                <button 
                    type="button"
                    onClick={() => this.props.onclick("All")}
                    className="btn btn-primary"
                >
                    All in one
                </button> < br/>

            </nav>
        )
    }
}

export default Menu;