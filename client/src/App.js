import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NotFound from "./components/NotFound/NotFound";
import DoubleProcess from "./components/DoubleProcess/DoubleProcess";
import Intro from "./components/Intro/Intro";
import SearchStudent from "./components/SearchStudent/SearchStudent";
import AttendedCheck from "./components/AttendedCheck/AttendedCheck";
import Attend from "./components/Attend/Attend";
import Success from "./components/Success/Success";


class App extends Component {

    componentDidMount() {
        document.title = '부고 출석'
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Intro} />
                            <Route path='/search' component={SearchStudent} />
                            <Route path='/attendedcheck' component={AttendedCheck} />
                            <Route path='/attend' component={Attend} />
                            <Route path='/success' component={Success} />
                            <Route path={'/double'} component={DoubleProcess} />
                            <Route component={NotFound} />
                        </Switch>
                    </Router>
                </header>
            </div>
        );
    }
}

export default App;
