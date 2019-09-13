'use strict';
const e = React.createElement;

class ProjectCard extends React.Component {
  render() {
    return (
      e('div', null,
        e('h3', null, this.props.project.name),
        e('h4', null, this.props.project.organization),
        e('div', null,
          this.props.project.tags.map((tag, i) => (
            e('span', {key: i, className: 'usa-label'}, tag)
          ))
        ),
        e('p', null, this.props.project.description),
        e('a', {href: this.props.project.repositoryURL, className:' usa-button'}, 'Go to repo')
      )
    )
  }
}

class ProjectList extends React.Component {
  render() {
    const projectList = this.props.projects.map((item, i) => (
      e(ProjectCard, {project: item, key: i}, null)
    ));

    return (
      e('div', null,
        projectList
      )
    );
  }
}

class ProjectsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount = () => {
    // fetch code.json
    fetch('./code.json').then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
      this.setState({projects: data.releases});
    }).catch(err => {
      console.log("Error fetching code.json:", err);
    });
  }

  render() {
    return (
      e('div', null,
        e('h2', null, 'Projects'),
        e(ProjectList, {projects: this.state.projects}, null),
      )
    );
  }
}

ReactDOM.render(
  // <ProjectsApp />,
  e(ProjectsApp, null, null),
  document.getElementById('browse-projects')
);