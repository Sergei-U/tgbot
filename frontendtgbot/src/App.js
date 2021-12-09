import React, {Component} from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Currencies from "./pages/Currencies";
import Header from "./pages/Header";
import Home from "./pages/Home";
import StatsIncomes from "./pages/StatsIncomes";
import StatsSpend from "./pages/StatsSpend";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Header/>
                    <Home/>
                    <div class='app-wrapper-component'>
                        <Route path="/Currencies" component={Currencies}/>
                        <Route path="/StatsIncomes" component={StatsIncomes}/>
                        <Route path="/StatsSpend" component={StatsSpend}/>
                    </div>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;