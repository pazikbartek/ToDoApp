import React, { Component } from 'react';
import Menu from './menu.js';
import './style.css';
import TaskList from './TaskList.js';

class App extends Component {

  state= {
    currentCategory: "All",
    currentIcon: "fas fa-paste"
  }

  handleChangeCategory = (category, icon) => {
    this.setState({
      currentCategory: category,
      currentIcon: icon
    })
  }

  render() {
    return (
      <section className="box">
        <Menu onclick={this.handleChangeCategory}/>
        <TaskList curCat={this.state.currentCategory} icon={this.state.currentIcon} /> 
      </section> 
      
    );
  }
}


export default App;
