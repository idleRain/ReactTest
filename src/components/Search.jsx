import React, {Component} from 'react';
import axios from "axios";
import './Search.css'

class Search extends Component {
    searchUser = async () => {
        const {keyWord: {value: v}} = this
        if (!v.trim()) return
        const {data: res} = await axios.get('https://api.github.com/search/users', {
            params: {
                q: v
            }
        }).catch(error => console.log(error))
        console.log(res)
        this.props.saveUsers(res.items)
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
