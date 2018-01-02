import React from 'react'
import ReactDOM from 'react-dom'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import Nav from './nav'
import Load from './load'
import Loadb from './load.b'
import Loadc from './load.c'
import Error from './error'

// exact 表示精确匹配

ReactDOM.render(
    <Router>
        <div>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Load}></Route>
                <Route path="/b" component={Loadb}></Route>
                <Route path="/c" component={Loadc}></Route>
                <Redirect from="/redirect" to="/b"></Redirect>
                <Route component={Error}></Route>
            </Switch>
        </div>
    </Router>,
    document.getElementById('app')
)