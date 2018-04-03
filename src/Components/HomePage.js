import React, {Component} from 'react';
import FontAwesomeButton from './FontAwesomeButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/home.css";
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {blurEffect: 5, blurUp: true};
  }
/*
  drawTitleText() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    c.width = window.innerWidth/2;
    c.height = window.innerHeight;
    c.style.width = window.innerWidth/2;
    c.style.height = window.innerHeight;

    ctx.fillStyle = "white";
    ctx.textAlign = "left";
    ctx.shadowColor = "rgb(255, 255, 255)";
    ctx.shadowBlur = this.state.blurEffect;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.font = "0.05"* window.innerWidth + "px Arial white";
    ctx.fillText("HELLO!", c.width/5, c.height/6);
    ctx.fillText("MY NAME IS", c.width/5, c.height/4);
    ctx.fillText("SZYMON", c.width/5, c.height/4 + (0.04*window.innerWidth));
    ctx.fillText("WELCOME TO", c.width/5, c.height/4 + (0.08*window.innerWidth));
    ctx.fillText("MY WEBSITE", c.width/5, c.height/4 + (0.12*window.innerWidth));


    if(this.state.blurEffect > 50)
      this.setState({blurUp: false});
    else if(this.state.blurEffect <= 5)
      this.setState({blurUp: true});

    this.setState({blurEffect: this.state.blurUp ? this.state.blurEffect+0.5 : this.state.blurEffect-0.5});

  }

  componentDidMount() {
    this.timer = setInterval(() => this.drawTitleText(), 100);
  }

  componentWillUnmount() {
     clearInterval(this.timer);
  }
*/
  render() {
    return(
      <ReactCSSTransitionGroup transitionName = "project"
         transitionAppear = {true} transitionAppearTimeout = {500}
         transitionEnter = {false} transitionLeave = {true} transitionLeaveTimeout = {500}>
        <div class="container wrapper">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-xs-12 mb-8">
              <br/>
              <h2 class="title-text">HELLO!</h2>
              <h2 class="title-text">MY NAME IS</h2>
              <h2 class="title-text">SZYMON</h2>
              <h2 class="title-text">WELCOME TO</h2>
              <h2 class="title-text">MY WEBSITE</h2>

              </div>
              <div class="col-lg-4 col-md-4 col-xs-12 mb-4">
                <FontAwesomeButton url="#" icon="fa fa-facebook-f"/>
                <FontAwesomeButton url="#" icon="fa fa-github"/>
             </div>
           </div>
        </div>
    </ReactCSSTransitionGroup>
    );
  }
}

export default HomePage;
