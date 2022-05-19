import React, {Component} from 'react';
import Search from "./components/Search";
import List from "./components/List";

class App extends Component {
    state = {
        // 初始化用户信息
        users: [],
        // 是否第一次打开
        isFirst: true,
        // 是否加载中
        isLoading: false,
        // 请求相关的错误信息
        err: ''
    }
    saveUsers = users => {
        this.setState({
            users
        })
    }

    render() {
        return (
            <div>
                <Search saveUsers={this.saveUsers}/>
                <List users={this.state.users}/>
            </div>
        );
    }
}

export default App;
