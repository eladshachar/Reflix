import React, { Component } from 'react'
import '../styles/catalog.css'
import Movie from './Movie'


export default class Catalog extends Component {
    constructor(){
        super()

    }

    handleTyping = (event) => {
        console.log(event.target.value)
        this.props.filterByString(event.target.value)
    }
  
  
    render() {

        let rented = this.props.rented
        let catalog = this.props.catalog

        return (
        <div>
            
            <div id='funds-container'>
                <div id='funds-info'>{`You have $${this.props.funds} left`}</div>
                <div id='warning'>{this.props.warning}</div>
            </div>

            <em className='title'>Rented:</em>
            <div id='rented-movies-container' className='container'>
            {rented.map(movie=> {
                return (
                    <Movie movie={movie} changeMovieStatus={this.props.changeMovieStatus}/>
                )
            })}
            </div>

            <em className='title'>Catalog:</em>
            <div>
                <input id='search-catalog' type="text" placeholder='Search in catalog...' onChange={this.handleTyping}/>
            </div> 
            <div id='movies-catalog-container' className='container'>
            {catalog.map(movie=> {
                return (
                    <Movie movie={movie} changeMovieStatus={this.props.changeMovieStatus}/>
                )     
            })}
            </div>

        </div>
        )
  }
}
