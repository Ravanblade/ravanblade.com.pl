import React, {Component} from 'react';
import axios from 'axios';
import ProjectButton from './ProjectButton'
import Project from './Project'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/project.css";

class ProjectsPage extends Component {

  constructor(props) {
    super(props);
    this.state = { projects:[], pageNumber: 0, category: -1, pageCount: 0, intervalId: 0 }
    this.handleChangePage = this.handleChangePage.bind(this);
  }

   getProjects = async (pageN = 0) => {
      await axios.get("http://2bdesign.lh.pl/all/API/ravanblade/db_request.php", {
        headers: {
            'Access-Control-Allow-Origin': '*'
          },
          params: {
            type: 0,
            projectsPerPage: 6,
            page: pageN,
            categoryId: this.state.category
          }
        })
        .then((res) => {

          let projects = res.data.projects.map( (project) => {
            return(
              <Project title={project.Title} imgUrl={project.ImgUrl}
                 url={project.Url} technologies={project.Technologies} text={project.Text} codeUrl={project.CodeUrl} codeText={project.CodeText} urlText={project.UrlText}/>
             )})

            this.setState({projects: projects, pageCount: res.data.count});
        });

  }

  scrollStep = () => {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }

  scrollToTop = () => {
    let intervalId = setInterval(this.scrollStep, 16.66);
    this.setState({ intervalId: intervalId });
  }

  componentDidMount() {
    this.getProjects();
  }

  handleChangePage = (e, page) => {
    e.preventDefault();
    this.scrollToTop();
    this.setState({pageNumber: page});
    this.getProjects(page);

  }

  render() {
    let pro = [];
    for (let i = 0; i < this.state.pageCount/6; i++) {
        pro.push(<li class="page-item"><a onClick={(e) => this.handleChangePage(e, i)} class="page-link" href="#">{i+1}</a></li>);
    }

    return(
      <div class="container wrapper fadeIn">
        <div class="row mb-4 fadeIn">
          {this.state.projects}
          </div>
          <div class="row">
            <ul class="pagination pagination-center">
                {pro}
           </ul>
          </div>
      </div>
    );
  }
}

export default ProjectsPage;
