import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export const Projects = ({ projects }) => {

  return (
    projects.map((project) => (
      <List>
        <ListItem>
          <ListItemText primary={project.name} secondary={project.description} />
        </ListItem>
      </List>
    ))
  );
};
