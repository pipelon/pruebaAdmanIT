import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Users from './users/users';
import User from './users/user';

const routing = (
        <Router>
            <div>
                <Route path="/user/:userId" component={User} />
                <Route path="/users" component={Users} />
                <Route path="/" component={Users} />
            </div>
        </Router>
        )

ReactDOM.render(routing, document.getElementById('root'));