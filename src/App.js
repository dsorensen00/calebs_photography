import React, { Component } from 'react'
import Routing from './Components/Routing'
import './Style/MainStyle.css'
import styled from 'styled-components'

const Anchor = styled.a`
      text-decoration:none;
      color: hotpink;
  `

class App extends Component {

  redirFb(){
    window.open('https://facebook.com', '_blank')
  }
  
  render() {
    
    return (
      <div className="App">
        <header className="container-fluid">
          <div className="row">
            <nav className="sticky"> 
              <ul className="nav nav-pills ">
                <div>  
                  <li className="nav-item col-xs-6">  
                    <Anchor className="nav-link" href="/">Home</Anchor>
                  </li >
                </div>
                <div className="col-xs-6">  
                  <li className="nav-item">  
                    <Anchor className="nav-link" href="/gallary">Gallary</Anchor>
                  </li>
                </div>
                <div className="col-xs-6">  
                  <li className="nav-item">  
                    <Anchor className="nav-link" href="/contact">CONTACT</Anchor>
                  </li>
                </div>
              </ul>
            </nav>                  
          </div>  
        </header>

        <Routing />
        <footer className="text-center">
          <Anchor href="/">HOME</Anchor>
          <Anchor href="/contact">CONTACT</Anchor>
          <div class="row">
              <div class="col-md-3">
                <div class="card mb-4">
                    <button class="social-card-header align-middle text-center bg-facebook" onClick={()=>this.redirFb()}>
                      <i class="fab fa-facebook-square" ></i>
                    </button>
                    <div class="card-body text-center">
                      <div class="row">
                          <div class="col border-right">
                            <i class="far fa-thumbs-up text-facebook"></i>
                            <span class="text-muted">Like</span>
                            <div class="font-weight-bold">12K</div>
                          </div>
                          <div class="col">
                            <i class="fas fa-share-alt text-facebook"></i>
                            <span class="text-muted">Share</span>
                            <div class="font-weight-bold">10K</div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card mb-4">
                    <div class="social-card-header align-middle text-center bg-google-plus">
                      <i class="fab fa-google-plus-square"></i>
                    </div>
                    <div class="card-body text-center">
                      <div class="row">
                          <div class="col border-right">
                            <i class="fab fa-google-plus-g text-google-plus"></i>
                            <span class="text-muted">Like</span>
                            <div class="font-weight-bold">12K</div>
                          </div>
                          <div class="col">
                            <i class="fas fa-share-alt text-google-plus"></i>
                            <span class="text-muted">Share</span>
                            <div class="font-weight-bold">10K</div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card mb-4">
                    <div class="social-card-header align-middle text-center bg-twitter">
                      <i class="fab fa-twitter-square"></i>
                    </div>
                    <div class="card-body text-center">
                    {/* in order to have something post to Twitter you need to use the Twitter API found
                    here: https://developer.twitter.com/en/docs/tweets/post-and-engage/overview */}
                      <div class="row">
                          <div class="col border-right">
                            <i class="fab fa-twitter text-twitter"></i>
                            <span class="text-muted">Tweet</span>
                            <div class="font-weight-bold">12K</div>
                          </div>
                          <div class="col">
                            <i class="fas fa-share-alt text-twitter"></i>
                            <span class="text-muted">Share</span>
                            <div class="font-weight-bold">10K</div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card mb-4">
                    <div class="social-card-header align-middle text-center bg-pinterest">
                      <i class="fab fa-pinterest-square"></i>
                    </div>
                    <div class="card-body text-center">
                      <div class="row">
                          <div class="col border-right">
                            <i class="fab fa-pinterest-p text-pinterest"></i>
                            <span class="text-muted">Pin</span>
                            <div class="font-weight-bold">12K</div>
                          </div>
                          <div class="col">
                            <i class="fas fa-share-alt text-pinterest"></i>
                            <span class="text-muted">Share</span>
                            <div class="font-weight-bold">10K</div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
