import * as React from 'react';
import { Router, Route, Switch } from 'react-router';
import { Provider } from 'mobx-react';
import * as allStores from '../store';
import { createHashHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';
import { routingStore } from 'src/store';
import Home from './home/Home';
import './App.scss';

const hashHistory = createHashHistory();
const history = syncHistoryWithStore(hashHistory, routingStore)

export default class App extends React.Component {
  public render() {
    return (
      <Provider {...allStores}>
        <Router history={history}>
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
