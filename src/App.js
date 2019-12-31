import React, {Component} from 'react';
import {Router} from '@reach/router';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './main.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Castles from './components/Castles';
import BigPicture from './components/BigPicture';
import Locator from './components/Locator';


class App extends Component {
  constructor() {
    super();
    this.state = { pictures: [] }

   
    this.getUserInput = this.getUserInput.bind(this)
    
    
  }

  async getUserInput(input) {
    
    let response = await fetch(`https://pixabay.com/api/?key=14730273-9aa007b222389d9f2d9fdede6&q=${input}`)
    let data = await response.json()
    this.setState({ pictures: data.hits })
  }

    

  render() {
    return (
      <div>
        <Nav />
        <Router> 
          <Home path="/" userInput={this.getUserInput}></Home>
          <About path="/about"></About>
          <Projects path="/projects"></Projects>
          <Contact path="/contact"></Contact>
          <Castles pics={this.state.pictures} path="/castles"></Castles>
          <BigPicture path="/bigpicture"></BigPicture>
          <Locator path="/locator"></Locator>
        </Router>
        <Footer />
      </div>
      )
  }
  
}

export default App;
