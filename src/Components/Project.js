import React, {Component} from 'react';
import ProjectButton from './ProjectButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/project.css";

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Project extends Component {
  render() {
    const codeButton = this.props.codeUrl ? ( <ProjectButton url={this.props.codeUrl} text={this.props.codeText} icon={null}/> ) : (<div></div>);
    const urlButton = this.props.url ? ( <ProjectButton url={this.props.url} text={this.props.urlText} icon={null}/> ) : (<div></div>);

    return(

          <div class="col-lg-4 col-md-12 mb-4">
            <ReactCSSTransitionGroup transitionName = "project"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionEnter = {false} transitionLeave = {false}>
            <div class="project">
              <div class="project-view">
                  <img src={require(`../img/projects/${this.props.imgUrl}`)} class="img-p"/>
                  <a target="_blank" href={this.props.url} >
                  </a>
              </div>
                <div class="project-body">
                    <h5 class="project-title">{this.props.title}</h5>
                    <p class="project-text"><strong>{'Technology: ' + this.props.technologies}</strong></p>
                    <p class="project-text">{this.props.text}</p>
                    {codeButton}
                    {urlButton}
                </div>
            </div>
            </ReactCSSTransitionGroup>
          </div>

    );
  }
}

export default Project;
