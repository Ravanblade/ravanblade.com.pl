import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/App.css";

class Footer extends Component {
  render(){
    return(
      <div class="row text-center footer-container">
        <p class="footer-copyright">Copyright &copy; Szymon Antonik 2018</p>
      </div>
    );
  }
}

export default Footer;
