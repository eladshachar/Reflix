import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Catalog from './components/Catalog';


export default class App extends Component {
  constructor(){
    super()
    this.state = {

      users: ["Adam", "Eve", "Solomon", "David"]
   
    }
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div id="home-background"></div>
          <div id="main-links">
            <Link to="/">Home   </Link>
            <Link to="/catalog">Catalog</Link>
          </div>
          <Route path="/" exact render={()=> <Home users={this.state.users}/>}/>
          <Route path="/catalog" exact component={Catalog}/>
        </div>
      </Router>
    )
  }
}

