import React, {Component} from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Currencies from "./pages/Currencies";
import Home from "./pages/Home";


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={Home}/>
                    <Currencies/>
                </Switch>
            </Router>
        )
    }
}

export default App;