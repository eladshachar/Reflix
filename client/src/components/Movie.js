import React, { Component } from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import '../styles/movie.css'

export default class Movie extends Component {
    
    constructor() {
        super()
    }
    
    changeMovieStatus = () => { 
        this.props.changeMovieStatus(this.props.movie)
    }

    render() {
        return (
        <div className='movie' style={{backgroundImage: `url(${this.props.movie.img}`}}>
            <button className='rental-status-change' onClick={() => this.changeMovieStatus()}>{this.props.movie.isRented ? "-" : "+"}</button>
            <Link to={`/catalog/:${this.props.movie.id}`}>
                <button className='info-button'>info</button>
            </Link>
        </div>
        )
    }
}
