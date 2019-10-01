import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';


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
        completed: false
      },
      {
        id: 3, 
        title: "Go fishing",
        completed: false
      }
    ]
  }

  markComplete = (id) =>{
    // this.state.todos.completed = !this.state.todos.completed
    // console.log(id)
    this.setState({ todos: this.state.todos.map(sth=>{
      if(sth.id === id)
        sth.completed = !sth.completed
      return sth
    })})
  }

  delete = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}) //spread operator

  }


  render(){
    return (
      <div className= 'App'>
        <Header />
        <AddTodo />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delete={this.delete}/>
      </div>
    )
  }
}

export default App;
