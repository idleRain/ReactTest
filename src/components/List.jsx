import React, {Component} from 'react';
import './List.css'

class List extends Component {
    render() {
        const {users} = this.props
        return (
            <div className="list-box">
                <ul>
                    {users.map(item => {
                        return (
                            <li key={item.id}>
                                <a href={item.html_url}>
                                    <img src={item.avatar_url} alt=""/>
                                    <p>{item.login}</p>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default List;
