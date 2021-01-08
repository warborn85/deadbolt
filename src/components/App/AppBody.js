import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectsContainer from '../Projects/ProjectsContainer';
import AddProjectContainer from '../AddProject/AddProjectContainer';
import { Capture } from '../Camera';

export const AppBody = () => (
  <Switch>
    <Route exact path="/" component={ProjectsContainer} />
    <Route path="/add" component={AddProjectContainer} />
    <Route path="/picture" component={Capture} />
  </Switch>
);
