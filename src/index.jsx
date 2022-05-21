// 引入 React 核心库
import React from "react"
// 引入 ReactDOM
import ReactDOM from "react-dom"
// 引入 App 组件
import App from "./App";
import {BrowserRouter} from "react-router-dom";

// 渲染 App 到页面
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.querySelector('#root')
)
