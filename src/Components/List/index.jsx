import React, {Component} from 'react'
import Item from "../Item"
import './index.css'

class List extends Component {
    render() {
        const {todos} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(todo => {
                        return <Item updateTodos={this.props.updateTodos} key={todo.id} {...todo}/>
                    })
                }
            </ul>
        );
    }
}

export default List
