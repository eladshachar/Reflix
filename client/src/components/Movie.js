import React, { Component } from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import '../styles/movie.css'

export default class Movie extends Component {
    

    render() {
        return (
        <div className='movie' style={{backgroundImage: `url(${this.props.movie.img}`}}>
            <button className='rental-status-change'>{this.props.isRented ? "-" : "+"}</button>
            <Link to={`/catalog/:${this.props.movie.id}`}>
                <button className='info-button'>info</button>
            </Link>
        </div>
        )
    }
}
