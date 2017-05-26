import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import ReactRouterRelay from 'react-router-relay';
import {IndexRoute, Route, Router} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import BrowserHistory from 'react-router/lib/browserHistory'
import App from './components/App';
import AppHomeRoute from './routes/AppHomeRoute';
import ViewerQueries from './routes/ViewerQueries';



import Main from "./components/Main/Main";

ReactDOM.render(
    <Router
        createElement={ReactRouterRelay.createElement}
        history={ BrowserHistory }>        
        <div className="container">
            <div className="row">
                <div className="col-lg-12">

                        <Route
                            path="/" component={Main}
                            queries={ViewerQueries}>
                        </Route>
                        <Route
                            path="/asd" component={App}
                            queries={ViewerQueries}>
                        </Route>

                </div>
            </div>
        </div>
    </Router>,
    document.getElementById('root')
);