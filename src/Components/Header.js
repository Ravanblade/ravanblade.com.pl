import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/App.css";

class Header extends Component {
  render(){
    return(
    <header class="masthead">
      <div class="intro-body">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <a href="/About" class="btn btn-circle js-scroll-trigger">
                <i class="fa fa-angle-double-down animated"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;
