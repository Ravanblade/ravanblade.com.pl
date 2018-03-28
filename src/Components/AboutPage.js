import React, {Component} from 'react';
import BannerText from './BannerText';
import SkillProgressBar from './SkillProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/about.css";

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class AboutPage extends Component {
  render() {
    return(
      <ReactCSSTransitionGroup transitionName = "project"
         transitionAppear = {true} transitionAppearTimeout = {500}
         transitionEnter = {false} transitionLeave = {true} transitionLeaveTimeout = {500}>
        <div class="container wrapper fadeIn white-fade">
          <div class="row about-header">
            <p class="about-header-text">About me</p>
          </div>
          <div class="row">
            <div class="col-lg-3 col-xs-12">

              <img src={require("../img/ryj.jpg")} class="about-picture"/>
            </div>
            <div class="col-lg-9 col-xs-12">
              <h3 class="about-skills">My skills</h3>
                <SkillProgressBar skillName="C#" skillPercentage="75%"></SkillProgressBar>
                <SkillProgressBar skillName="C/C++" skillPercentage="70%"></SkillProgressBar>
                <SkillProgressBar skillName="SQL" skillPercentage="60%"></SkillProgressBar>
                <SkillProgressBar skillName="HTML + CSS" skillPercentage="60%"></SkillProgressBar>
                <SkillProgressBar skillName="ASP.NET MVC 5" skillPercentage="55%"></SkillProgressBar>
                <SkillProgressBar skillName="Java" skillPercentage="55%"></SkillProgressBar>
                <SkillProgressBar skillName="JavaScript" skillPercentage="50%"></SkillProgressBar>
                <SkillProgressBar skillName="Pascal" skillPercentage="55%"></SkillProgressBar>
                <SkillProgressBar skillName="PHP" skillPercentage="40%"></SkillProgressBar>
                <SkillProgressBar skillName="ReactJS" skillPercentage="40%"></SkillProgressBar>
                <SkillProgressBar skillName="Android SDK" skillPercentage="30%"></SkillProgressBar>
          </div>
        </div>
      </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default AboutPage;
