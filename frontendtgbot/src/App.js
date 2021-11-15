import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Currencies from './Currencies';


class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/currencies' exact={true} component={Currencies}/>
          </Switch>
        </Router>
    )
  }
}

export default App;