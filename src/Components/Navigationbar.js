import React, {Component} from 'react';
import Navigationitem from './Navigationitem'
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigationbar extends Component {
  render() {
    return(
       <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
         <div class="container">
           <a class="navbar-brand js-scroll-trigger" href="#page-top">{this.props.webPageName}</a>
           <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
             Menu
             <i class="fa fa-bars"></i>
           </button>
           <div class="collapse navbar-collapse" id="navbarResponsive">
             <ul class="navbar-nav ml-auto">
               <Navigationitem pageName="HomePage" pageNameDisplayed="Home"/>
               <Navigationitem pageName="AboutPage" pageNameDisplayed="About"/>
               <Navigationitem pageName="ProjectsPage" pageNameDisplayed="Projects"/>
             </ul>
           </div>
         </div>
       </nav>

    );
  }
}

export default Navigationbar;
