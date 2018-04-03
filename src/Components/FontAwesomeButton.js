import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/fontawesomebutton.css";
import 'font-awesome/css/font-awesome.min.css';

class FontAwesomeButton extends Component {
  render() {
    return(
        <div class="icon-circle"><a href={this.props.url} target="_blank"><i class={this.props.icon}></i></a></div>
    );
  }
}

export default FontAwesomeButton;
