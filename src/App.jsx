import React, {Component} from 'react';
// 引入 react 路由
import {Link, BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import Home from "./components/Home";
import About from "./components/About";

class App extends Component {
    render() {
        return (
            <div id="App">
                <h1>Hello!</h1>
                <div className="row">
                    <div className="left">
                        <Link to="/home">home</Link>
                        <Link to="/about">about</Link>
                    </div>
                    <div className="panel">
                        {/*注册路由*/}
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
