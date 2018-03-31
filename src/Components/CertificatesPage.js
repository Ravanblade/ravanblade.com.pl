import React, {Component} from 'react';
import GalleryItem from './GalleryItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/certificates.css";

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class CertificatesPage extends Component {
  render() {
    return(
      <ReactCSSTransitionGroup transitionName = "project"
         transitionAppear = {true} transitionAppearTimeout = {500}
         transitionEnter = {false} transitionLeave = {true} transitionLeaveTimeout = {500}>
        <div class="container wrapper fadeIn white-fade">
          <div class="row certificates-header">
            <p class="certificates-header-text">Certificates</p>
          </div>
          <div class="row certificates-bottom">
            <GalleryItem image="1.jpg" text="Bachelor of science"></GalleryItem>
            <GalleryItem image="2.jpg" text="IT specialist"></GalleryItem>
            <GalleryItem image="3.jpg" text="Basics of PLC programing"></GalleryItem>
            <GalleryItem image="4.jpg" text="Installing and configuring Windows Server 2012"></GalleryItem>
            <GalleryItem image="5.jpg" text="Installing and configuring Windows 10"></GalleryItem>
            <GalleryItem image="6.jpg" text="CCNA Exploration: Network fundamentals"></GalleryItem>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default CertificatesPage;
