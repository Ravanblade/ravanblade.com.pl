import React, {Component} from 'react';
import Navigationitem from './Navigationitem'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

class Navigationbar extends Component {
  constructor() {
    super();
    this.state = {showCol: false};
  }

  onClickToggleHandler = () => {
    this.setState({showCol: !this.state.showCol});
  }

  onClickNavItem = () => {
    this.setState({showCol: false});
  }

  render() {
    const active = this.state.showCol ? ' show' : '';
    return(
       <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-dark" id="mainNav">
         <div class="container">
           <a class="navbar-brand js-scroll-trigger" href="#page-top">{this.props.webPageName}</a>
           <button class="navbar-toggler navbar-toggler-right" onClick={this.onClickToggleHandler} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
             Menu
             <i class="fa fa-bars"></i>
           </button>
            <div class={"collapse navbar-collapse" + active} id="navbarResponsive">
             <ul class="navbar-nav ml-auto">
               <Navigationitem pageName="HomePage" pageNameDisplayed="Home" onClick={this.onClickNavItem}/>
               <Navigationitem pageName="AboutPage" pageNameDisplayed="About" onClick={this.onClickNavItem}/>
               <Navigationitem pageName="CertificatesPage" pageNameDisplayed="Certificates" onClick={this.onClickNavItem}/>
               <Navigationitem pageName="ProjectsPage" pageNameDisplayed="Projects" onClick={this.onClickNavItem}/>
             </ul>
           </div>
         </div>
       </nav>

    );
  }
}

export default Navigationbar;
