import React, { Component } from 'react';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} method="post" style={{ display: 'flex', padding: '0px', margin: '0px'}}>
                    <input type="text" name="title" onChange={this.onChange} value={this.state.title} style={{flex: '5', outline: 'none', border: 'none', padding: '10px', margin: '0px'}} placeholder='Add Todo ...' />
                    <input type="submit" value="Add" className='btn' style={{ flex: '1', color: 'white', backgroundColor: '#555', margin:'0px', border: 'none'}} />
                </form>                
            </div>
        )
    }
}

export default AddTodo
