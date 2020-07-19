import React from 'react';
import { AddProject } from './AddProject/AddProject';
import PrimarySearchAppBar from './AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBarWithDrawer from './AppBarWithDrawer';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Router, Switch } from 'react-router-dom';

export default () => (
  <Box>
     {/* <Switch>
       <Route exact path="/" component={} />
     </Switch> */}
      <AppBarWithDrawer />
    {/* <header className="App-header">
      <PrimarySearchAppBar />
    </header>
    <main>
      <Container>
        <AddProject />
      </Container>
    </main>
    <footer></footer> */}
  </Box>
);
