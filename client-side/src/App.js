import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from './components/page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" render={props => <Page title="HOME" /> }/>
          <Route exact path="/login" render={props => <Page title="LOGIN" /> }/> 
          <Route exact path="/signup" render={props => <Page title="SIGNUP" /> }/> 
        </Switch>
    </BrowserRouter>
  );
}

export default App;
