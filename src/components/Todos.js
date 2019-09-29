import React, { Component } from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

class Todos extends Component{

    render(){
        return(
            this.props.todos.map((todo)=>{
            return <TodoItem key={todo.id} todoitem={ todo } markComplete={this.props.markComplete}/>
        }
        ))
    }
}

Todos.propTypes={
    todos: propTypes.array.isRequired
}

export default Todos;