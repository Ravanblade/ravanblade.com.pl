import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/project.css";

class Pagination extends Component {
  render() {
    return(
      <div class="row">
        <ul class="pagination pagination-center">
            {this.props.items}
       </ul>
      </div>
    );
  }
}

export default Pagination;
