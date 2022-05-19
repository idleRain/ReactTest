import React, {Component} from 'react'
import './index.css'

class Item extends Component {
    // 勾选、取消勾选一个 todo
    handleCheck = id => {
        return e => {
            // console.log(id,e.target.checked)
            this.props.updateTodos(id,e.target.checked)
        }
    }
    // 点击删除按钮的回调
    delTodo = id => {
        // console.log(id)
        if (window.confirm('确认删除吗？')) this.props.deleteTodo(id)
    }

    render() {
        const {id, title, done} = this.props
        return (
            <li>
                <label>
                    {/*<input type="checkbox" checked={done}/>*/}
                    <input type="checkbox" onChange={this.handleCheck(id)} checked={done}/>
                    <span>{title}</span>
                </label>
                <button onClick={() => this.delTodo(id)} className="btn btn-danger">删除</button>
            </li>
        );
    }
}

export default Item
