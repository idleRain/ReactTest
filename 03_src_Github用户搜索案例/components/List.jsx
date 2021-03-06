import React, {Component} from 'react';
import './List.css'

class List extends Component {
    render() {
        const {users, isFirst, isLoading, error} = this.props
        return (
            <div className="list-box">
                <ul>
                    {
                        isFirst ? <h2>Enter the name you search</h2> :
                        isLoading ? <h2>Loading......</h2> :
                        error ? <h2 style={{color: '#ef475d'}}>{ error }</h2> :
                        users.map(item => {
                            return (
                                <li key={item.id}>
                                    <a href={item.html_url}>
                                        <img src={item.avatar_url} alt=""/>
                                        <p>{item.login}</p>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default List;
