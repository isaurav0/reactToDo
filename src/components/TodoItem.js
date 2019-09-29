import React, { Component } from 'react'; //rce
import propTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () =>{
        return {
            textDecoration: this.props.todoitem.completed ? 'line-through' : 'none',
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '2px #ccc solid'
        }
    }

    render() {
        return (
            <div style={ this.getStyle() }>
                <p>{this.props.todoitem.title}</p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todoitem: propTypes.object.isRequired
}


export default TodoItem
