import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import { green } from '@material-ui/core/colors';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    color: theme.palette.common.white,
    // backgroundColor: green[500],
    // '&:hover': {
    //   backgroundColor: green[600],
    // },
  },
}));

export const Projects = ({ projects }) => {
  const classes = useStyles();

  const fab =
    {
      className: classes.fab,
      icon: <AddIcon />,
      label: 'Add',
    };

  if (!projects.length) {
    return (
      <>
        <div>
          <span>No Projects</span>
        </div>
        <Fab aria-label={fab.label} className={fab.className} color="primary" component={Link} to="/add">
          <AddIcon />
        </Fab>
      </>
    );
  }

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
