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
                        return <Item updateTodos={this.props.updateTodos} deleteTodo={this.props.deleteTodo} key={todo.id} {...todo}/>
                    })
                }
            </ul>
        );
    }
}

export default List
