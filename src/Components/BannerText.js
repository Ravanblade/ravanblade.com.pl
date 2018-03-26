import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/App.css";

class BannerText extends Component {
  render() {
    return(
      <h2 class="banner-text">
        {this.props.text.split(";").map((item, key) => {
          return (
            <span key={key}>
                {item} <br/>
            </span> )
        })}
      </h2>
    );
  }
}

export default BannerText;
