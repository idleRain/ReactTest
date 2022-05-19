import React, {Component} from 'react'
import './index.css'

class Footer extends Component {
    //全选、取消全选的回调
    checkTodoAll = e => {
        this.props.checkTodoAll(e.target.checked)
    }
    // 点击清除所有已完成的回调
    clearAllDone = () => {
        if (window.confirm('确认清除所有已完成的Todo吗？')) this.props.clearAllDone()
    }
    render() {
        const {todos} = this.props
        // 全部
        const total = todos.length
        // 已完成
        const doneCount = todos.reduce((pre, item) => pre + (item.done ? 1 : 0), 0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.checkTodoAll} checked={total === doneCount && total !==0}/>
                </label>
                <span>
                    <span>已完成 {doneCount}</span> / 全部 {total}
                </span>
                <button onClick={this.clearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}

export default Footer
