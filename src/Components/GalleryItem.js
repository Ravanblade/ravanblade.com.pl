import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/gallery.css";

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class GalleryItem extends Component {

  constructor() {
    super();
    this.state = {showModal: false};
  }

  onClickHandler = () => {
    this.setState({showModal: !this.state.showModal});
  }

  render(){
    const active = this.state.showModal ? ' show' : '';
    const img = require("../img/gallery/" + this.props.image);
    return(
        <div class="col-lg-4 col-xs-12">
          <img src={img} class="gallery-thumbnail" onClick={this.onClickHandler}/>
          <p class="gallery-text">{this.props.text}</p>
            <div class={"gallery-full-container" + active} onClick={this.onClickHandler}>
              <div class="gallery-content">
                <span class="gallery-close-button">&times;</span>
                <img src={img} class="gallery-image"/>
                <div class="gallery-text-white">{this.props.text}</div>
              </div>
            </div>
        </div>

    );
  }
}

export default GalleryItem;
