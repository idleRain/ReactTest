import React, {Component} from 'react'
import {nanoid} from "nanoid"
import './index.css'

class Header extends Component {
    handleKeyUp = e => {
        const {key, target: {value}} = e
        if (key !== 'Enter' || !value.trim()) return
        const todoObj = {id: nanoid(), title: value, done: false}
        this.props.addTodo(todoObj)
        e.target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}

export default Header
