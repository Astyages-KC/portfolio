import React from 'react';
import Navbar from './Navbar'
import About from './About'
import Resume from './Resume'
import Projects from './Projects'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Projects} />
        <Route path='/resume' component={Resume} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App

// address : kevinclark.surge.sh
