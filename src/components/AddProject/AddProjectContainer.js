import React from 'react';
import { connect } from 'react-redux';
import { AddProject } from './AddProject';
import { actionCreators } from '../../store/project';

const AddProjectContainer = ({name, description, isComplete, updateField, addProject, cancelUpdate}) => (
  <AddProject
    name={name}
    description={description}
    isComplete={isComplete}
    updateField={updateField}
    addProject={addProject}
    cancelUpdate={cancelUpdate}
  />
);

const mapStateToProps = (state) => ({
  name: state.project.name,
  description: state.project.description,
  isComplete: state.project.isComplete,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (field, value) => {
    dispatch(actionCreators.updateField(field, value))
  },
  addProject: () => {
    dispatch(actionCreators.addProject());
  },
  cancelUpdate: () => {
    dispatch(actionCreators.cancelUpdate());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProjectContainer);
