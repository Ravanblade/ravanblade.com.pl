import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/skillprogressbar.css";

class SkillProgressBar extends Component {
  render() {

    let levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Master'];
    let levelsThreshold = [30, 50, 70, 90, 100];
    let intSkill = this.props.skillPercentage.replace(/\D/g,'');
    let level = levels[0];

    for(let i = 0; i < levels.length; i++) {
      if(intSkill <= levelsThreshold[i]) {
          level = levels[i];
          break;
      }
    }

    return(
      <div class="row skill-row">
      <div class="col-md-10 col-md-offset-2 col-sm-10 col-sm-offset-2 col-xs-10 col-xs-offset-2">
        <div class="progress">
          <div class="progress-bar  active" role="progressbar" aria-valuenow="  45"     aria-valuemin="0" aria-valuemax="100" style={{width: this.props.skillPercentage}}>
            <span class="skill-name"><strong>{this.props.skillName}</strong></span>
          </div>
      </div>
    </div>
    <div class="col-md-2 col-sm-2 col-xs-2 text-left skill-text">{level}</div>
    </div>
    );
  }
}

export default SkillProgressBar;
