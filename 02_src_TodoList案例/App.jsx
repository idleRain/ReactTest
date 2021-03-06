import React from "react"
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";
import './App.css'

class App extends React.Component {
    // 初始化状态
    state = {
        todos: [
            {id: '001', title: '吃饭', done: true},
            {id: '002', title: '睡觉', done: false},
            {id: '003', title: '开车', done: false},
        ]
    }
    // 添加一个 todo
    addTodo = todoObj => {
        const newTodos = [todoObj, ...this.state.todos]
        // console.log(newTodos)
        this.setState({todos: newTodos})
    }
    // 修改 todo 勾选状态
    updateTodos = (id, done) => {
        // console.log('App', id, done)
        const newTodos = this.state.todos.map(todoObj => {
            if (todoObj.id === id) return {...todoObj, done}
            else return todoObj
        })
        this.setState({todos: newTodos})
    }
    // 删除一个todo
    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(item => item.id !== id)
        })
    }
    // 全选、取消权限
    checkTodoAll = (done) => {
        this.setState({
            todos: this.state.todos.map(item => ({...item, item, done: done}))
        })
    }
    // 清除所有已完成
    clearAllDone = () => {
        this.setState({
            todos: this.state.todos.filter(item => !item.done)
        })
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List deleteTodo={this.deleteTodo} updateTodos={this.updateTodos} todos={this.state.todos}/>
                    <Footer clearAllDone={this.clearAllDone} checkTodoAll={this.checkTodoAll} todos={this.state.todos}/>
                </div>
            </div>
        )
    }
}

// 默认暴露 App 组件
export default App
