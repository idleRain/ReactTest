import React from "react"
import Hello from "./components/Hello";
import HelloVue from "./components/HelloVue";

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                <HelloVue/>
            </div>
        )
    }
}

// 默认暴露 App 组件
export default App
