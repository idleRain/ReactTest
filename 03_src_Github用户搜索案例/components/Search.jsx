import React, {Component} from 'react';
import axios from "axios";
import './Search.css'

class Search extends Component {
    searchUser = async () => {
        const {keyWord: {value: q}} = this
        if (!q.trim()) return
        // 发送请求前通知 App 更新状态
        this.props.updateAppState({
            isFirst: false,
            isLoading: true
        })
        // 发送请求
        const {data: res} = await axios.get('https://api.github.com/search/users', {
            params: { q }
        }).catch(error => {
            // 请求失败后通知 App 更新状态
            return this.props.updateAppState({
                isLoading: false,
                error: error.message
            })
        })
        // console.log(res)
        // 发送请求成功后通知 App 更新状态
        this.props.updateAppState({
            isLoading: false,
            users: res.items
        })
    }

    render() {
        return (
            <div className="search-box">
                <div className="search-content">
                    <h1>Search Github Users</h1>
                    <input ref={c => this.keyWord = c} type="text" placeholder="Enter the name you search"/>
                    <button onClick={this.searchUser}>Search</button>
                </div>
            </div>
        );
    }
}

export default Search;
