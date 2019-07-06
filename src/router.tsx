import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Dashboard } from './containers';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard}></Route>
      </Switch>
    </Router>
  );
};

