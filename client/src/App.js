import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Catalog from './components/Catalog';
import MovieDetails from './components/MovieDetails';

const COST = 3
const WARNING = "You have insufficient funds!"
const EMPTY = ""


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      funds: 10,
      warning: "",
      rented: [],
      catalog: [
          { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
          { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
          { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
          { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
          { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      searchedString: "",
      searchedMovies: [],
      users: ["Adam", "Eve", "Solomon", "David"]
   
    }
  }


  filterByString = str => {
    let newList = this.state.catalog.filter(m=> m.title.toLowerCase().includes(str.toLowerCase()))
    console.log(newList)
    this.setState({searchedString: str})
    this.setState({searchedMovies: newList})
  }
  
  changeMovieStatus = movie => {
    let rented = [...this.state.rented]
    let catalog = [...this.state.catalog]
    let newFunds = 0

    if(movie.isRented === false){
       
        if(this.state.funds < COST){
           this.setState({warning: WARNING}) 
        }
        else{

            newFunds = this.state.funds - COST
            this.setState({funds: newFunds})
            movie.isRented = true
            catalog = catalog.filter(m=> 
              m.id !== movie.id
            ) 
            rented = [...rented, movie]
        }                    
    }
    else {
        
        if(this.state.funds < COST){
            this.setState({warning: EMPTY})
        }

        newFunds = this.state.funds + COST
        this.setState({funds: newFunds})
        movie.isRented = false
        rented = rented.filter(m=>
          m.id !== movie.id    
        )
        catalog = [...catalog, movie]
    }

    this.setState({rented})
    this.setState({catalog})
}

  
  render() {
    return (
      <Router>
        <div className="App">
          <div id="main-links">
            <Link to="/" className='link'>Home   </Link>
            <Link to="/catalog" className='link'>Catalog</Link>
          </div>
          <Route path="/" exact render={()=> <Home users={this.state.users}/>}/>
          <Route path="/catalog" exact render={()=> <Catalog rented={this.state.rented} catalog={this.state.searchedString.length > 0 ? this.state.searchedMovies : this.state.catalog} funds={this.state.funds} warning={this.state.warning} changeMovieStatus={this.changeMovieStatus} filterByString={this.filterByString}/>}/>
          <Route path="/catalog/:id" exact render={({ match })=> <MovieDetails match={match} catalog={this.state.catalog} rented={this.state.rented}/>}/>
        </div>
      </Router>
    )
  }
}

