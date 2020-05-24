import React, { Component } from 'react';
import { getProjects } from '../../apiUtils/projectsUtils';
import './Projects.scss';
import Thumbnail from '../Thumbnails/Thumbnails';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.fetchProjects();
  }
  fetchProjects = async () => {
    this.setState({
      isLoading: true
    });
    const projects = await getProjects('srishailam');
    console.log(projects);
    this.setState({
      projects,
      isLoading: false
    })
  }
  generateThubnails = () => {
    const { projects } = this.state;
    if (projects.length === 0) {
      return 'No repos found.'
    }
    return (this.state.projects).map(project => {
      return (
        <Thumbnail
          key={project.name}
          {...project}
        />
      )
    });
  }
  render() {
    return (
      <div className="Projects">
        Projects
        {this.state.isLoading && <div>Loading Projects...</div>}
        <div className="Projects_row">
          {this.generateThubnails()}
        </div>
      </div>
    )
  }
}

export default Projects;