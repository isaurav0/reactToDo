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
                <button style={ btnStyle } onClick={this.props.delete.bind(this, id)}>x</button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todoitem: propTypes.object.isRequired
}

const btnStyle = {
        background: '#ff0000',
        color: '#fff',
        textDecoration: 'bold',
        border: 'none',
        float: 'right',
        padding: '4px 8px',
        borderRadius: '50% 50% 50% 50%',
        outline: 'none'
}


export default TodoItem
