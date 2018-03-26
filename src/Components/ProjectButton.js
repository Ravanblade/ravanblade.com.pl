import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/project.css";

class ProjectButton extends Component {
  render() {
    return(
      <a href={this.props.url} class="btn btn-primary btn-md btn-project">{this.props.text}
      <i class={this.props.icon}></i></a>
    );
  }
}

export default ProjectButton;
