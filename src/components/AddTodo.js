import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <div>
                <form action="/" method="post" style={{ display: 'flex', padding: '10px'}}>
                    <input type="text" name="add" id="add" style={{flex: '5'}} placeholder='Add Todo ...'/>
                    <input type="submit" value="Add" style={{ flex: '1'}} />
                </form>
                
            </div>
        )
    }
}

export default AddTodo
