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
      <header className="headerSection col-xs" >

      <nav className="navbar navbar-dark bg-dark fixed-top" id="navbar">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
        <HashLink className="nav-link" smooth to="/home">Home</HashLink>
        </li>
        <li class="nav-item">
        <HashLink className="nav-link" smooth to="/#landingSection">About</HashLink>
        </li>
          <li class="nav-item">
          <HashLink className="nav-link" smooth to="/library#librarySection">Music</HashLink>
          </li>


        </ul>
      </nav>


        <div className= "headerdiv" >
          <div className= "top">
            <h1 className="titlename"> j u s t j a m s. </h1>
            <p className="subtitle anim-typewriter">where words fail, music speaks </p>
          </div>
        </div>

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
