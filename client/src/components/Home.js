import React, { Component } from 'react';
import '../styles/home.css'
import User from './User';

class Home extends Component {

    render() {

        let users = this.props.users

        return (
            <div>
               
                <div id="home-title">WHO'S WATCHING?</div>

                <div id="users-container">
                {users.map(user=>{
                    return(
                        <User user={user}/>
                    )
                })}
                </div>

            </div>
        )
    }
}

export default Home;