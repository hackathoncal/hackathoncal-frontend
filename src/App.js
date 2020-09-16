import React from 'react';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Provider} from "react-redux";
import store from "./redux/store";

import './App.css';
import Main from "./components/Main";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path={"/"} exact component={Main} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
