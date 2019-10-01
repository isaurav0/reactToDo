import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import About from './components/pages/About';
//import axios from 'axios'


class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(), 
        title: "Learn React",
        completed: false
      }, 
      {
        id: uuid.v4(), 
        title: "",
        completed: false
      },
      {
        id: uuid.v4(), 
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

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    console.log(title)
    this.setState({todos: [...this.state.todos, newTodo]})
  }


  render(){
    return (
      <Router>
        <div className= 'App'>
          <Header />
          <Route exact path='/' render={props=> ( 
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} delete={this.delete}/>              
            </React.Fragment>
           )}/>
          <Route path='/about' component={About}/>

        </div>
      </Router>
    )
  }
}

export default App;
