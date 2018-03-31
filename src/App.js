import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigationbar from './Components/Navigationbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AboutPage from './Components/AboutPage'
import HomePage from './Components/HomePage'
import CertificatesPage from './Components/CertificatesPage'
import ProjectsPage from './Components/ProjectsPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div class="wrapper-background">
          <div class="wrapper">
            <div class="container">
              <Navigationbar webPageName="PORTFOLIO"/>
              <ReactCSSTransitionGroup transitionName = "project"
                   transitionAppear = {true} transitionAppearTimeout = {500}
                   transitionEnter = {false} transitionLeave = {false}>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/HomePage" component={HomePage} />
                  <Route path="/AboutPage" component={AboutPage} />
                  <Route path="/ProjectsPage" component={ProjectsPage} />
                  <Route path="/CertificatesPage" component={CertificatesPage} />
              </ReactCSSTransitionGroup>
            </div>
          </div>
          <Footer/>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
