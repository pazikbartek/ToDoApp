import React, { Component } from 'react';
import Menu from './menu.js';
import './style.css';
import List from './list';
import Sort from './sort';

class App extends Component {
  render() {
    return (
      <section className="box">
        <Menu />
        <List /> 
        <Sort />
      </section> 
      
    );
  }
}


export default App;
