import React, { Component } from 'react'
import Movie from './Movie'
import '../styles/movieDetails.css'

export default class MovieDetails extends Component {
  render() {
    

    let id = this.props.match.params.id.substring(1)
    let catalog = this.props.catalog
    let movie = catalog.find(m=> m.id == id)

    if(movie === undefined){
      let rented = this.props.rented
      movie = rented.find(m=> m.id == id)
    }

    return (
      <div>
        <div id='title'>{`${movie.title} (${movie.year})`}</div>
        <div id='image-container'>
          <img src={movie.img}></img>
        </div>
        <div id='description'>{movie.descrShort}</div>
      </div>
    )
  }
}
