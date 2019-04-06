import React, { Component } from 'react'
import Routing from './Components/Routing'
import './Style/MainStyle.css'
import styled from 'styled-components'

const Anchor = styled.a`
      text-decoration:none;
      color: #d9534f;
      border: solid 1.5px #d9534f;
      padding:5px;
      margin-left:30px;
      margin-top:7px;
      margin-bottom:7px;
      background-color:none;
      border-radius:4px;
      
  `


class App extends Component {

 
  
  render() {
    
    return (
      <div className="App">
        <div>
          <nav className="nav navbar-dark bg-dark">
            <ul className="nav">
              <li className="nav-item">
                <Anchor className="nav-link" href="/">Home</Anchor> 
              </li>
              <li className="nav-item">
                <Anchor className="nav-link" href="/gallery">Gallery</Anchor>
              </li>
              <li className="nav-item">
                <Anchor className="nav-link" href="/contact">Contact</Anchor>
              </li>
              <li className="nav-item">
                <Anchor className="nav-link" href="/schedule">Schedule</Anchor>
              </li>
            </ul>
          </nav>
        </div>

        <Routing />
        <footer className="text-center">
          <Anchor href="/">HOME</Anchor>
          <Anchor href="/contact">CONTACT</Anchor>
          
                    
                    
        </footer>
      </div>
    );
  }
}

export default App;
