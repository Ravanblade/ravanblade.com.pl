import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigationitem extends Component {
  render() {
    return(
        <li class="nav-item" onClick={this.props.onClick}>
            <NavLink className="nav-link js-scroll-trigger" to={"/" + this.props.pageName }>{this.props.pageNameDisplayed}</NavLink>
        </li>
    );
  }
}

export default Navigationitem;
