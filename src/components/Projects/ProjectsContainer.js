import React from 'react';
import { connect } from 'react-redux';
import { Projects } from './Projects';

const ProjectsContainer = ({ projects }) => (
  <Projects projects={projects} />
);

const mapStateToProps = (state) => ({
  projects: state.project.projects,
});

export default connect(mapStateToProps, null)(ProjectsContainer);
