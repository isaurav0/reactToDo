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
        const { title, id } = this.props.todoitem;

        return (
            <div style={ this.getStyle() }>
                {/* {console.log(this.props.markComplete)} */}
                <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/>{' '}
                  { title }
            </div>
        )
    }
}

TodoItem.propTypes = {
    todoitem: propTypes.object.isRequired
}


export default TodoItem
