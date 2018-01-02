import React from 'react'
import ReactDOM from 'react-dom'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Nav from './nav'
import Load from './load'
import Loadb from './load.b'
import Loadc from './load.c'

// exact 表示精确匹配

ReactDOM.render(
    <Router>
        <div>
            <Nav/>
            <Route exact path="/" component={Load}></Route>
            <Route path="/b" component={Loadb}></Route>
            <Route path="/c" component={Loadc}></Route>
        </div>
    </Router>,
    document.getElementById('app')
)