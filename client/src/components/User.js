import React, { Component } from 'react'
import '../styles/user.css'

export default class User extends Component {
  render() {
    return (
      <div className='user'>{this.props.user}</div>
    )
  }
}

