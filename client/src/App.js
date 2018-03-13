import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';

import Users from './components/Users';
import ProfilePage from './components/ProfilePage';
import Login from './components/Login';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <Box className="App">
        <Box direction='row' className="App-header">
          <Image src={logo} className="App-logo" alt="logo" />
          <Box margin='none' pad='none' align='center'>
            <Heading className="App-title" tag='h3' align='center' margin='none'>React Express Starter</Heading>
          </Box>
        </Box>
        <Box align='center' >
          <Router>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/SignUp' component={SignUp} />
              <Route exact path='/ProfilePage' component={ProfilePage} />
              <Route exact path='/Users' component={Users} />
              <Route component={Login} />
            </Switch>
          </Router>
        </Box>
      </Box>
    );
  }
}

export default App;
