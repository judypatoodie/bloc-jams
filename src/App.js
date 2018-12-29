import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import bgimage from './img/guitarBG.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="headerSection" >

      <nav className="navbar navbar-dark bg-dark fixed-top">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
        <HashLink className="nav-link" smooth to="/#landingSection">Home</HashLink>
        </li>
          <li class="nav-item">
          <HashLink className="nav-link" smooth to="/library#librarySection">Music Library</HashLink>
          </li>


        </ul>
      </nav>

      <header className="masthead">
        <div>
            <h1 className="titlename">Bloc Jams!</h1>

        </div>
      </header>
      </header>


      <main>
        <div id="landingSection"><Route exact path="/" component={Landing} /></div>
        <div id="librarySection"><Route path="/library" component={Library} /></div>
        <Route path="/album/:slug" component={Album} />
      </main>
      </div>
    );
  }
}

export default App;
