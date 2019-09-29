import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';


class App extends Component {
  state = {
    todos: [
      {
        id: 1, 
        title: "Code For Kura Haru",
        completed: false
      }, 
      {
        id: 2, 
        title: "Take out trash",
        completed: true
      },
      {
        id: 3, 
        title: "Go fishing",
        completed: true
      }
    ]
  }


  render(){
    return (
      <div className= 'App'>
        <h1>TODO's</h1><br/>
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;
