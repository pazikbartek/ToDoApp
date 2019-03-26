import React, { Component } from 'react';

class Menu extends Component{
    render(){
        return(
            <nav>
                <h3> Your lists: </h3>
                <button type="button" className="btn btn-primary">
                    Work &nbsp; <i class="fas fa-laptop"></i>
                </button> <br/> 
                <button type="button" className="btn btn-primary">
                    School &nbsp; <i class="fas fa-book-open"></i>
                </button> < br/>
                <button type="button" className="btn btn-primary">
                    Home &nbsp; <i class="fas fa-home"></i>
                </button> < br/>
                <button type="button" className="btn btn-primary">
                    All in one
                </button> < br/>
                <button type="button" className="btn btn-primary">
                    Add new &nbsp; <i class="fas fa-plus"></i>
                </button> < br/>
            </nav>
        )
    }
}

export default Menu;