import React, {Component} from 'react';
import BannerText from './BannerText'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/about.css";

class AboutPage extends Component {
  render() {
    return(
      <div class="container wrapper fadeIn">
        <div class="row mb-4 fadeIn">
          <div class="col-lg-8 mx-auto">
          <BannerText text="Siema;elo"/>
            <a href="/" class="btn btn-circle js-scroll-trigger">
              <i class="fa fa-angle-double-down animated"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
