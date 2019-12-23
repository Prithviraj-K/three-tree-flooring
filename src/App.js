import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import HardwoodPage from "./components/HardwoodPage/HardwoodPage";
import ScrollToTop from './ScrollToTop';

var history = createBrowserHistory();

class App extends Component {
  render(){
    return(
      <Router history={history}>
        <ScrollToTop>
          <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/Hardwood" component={HardwoodPage}/>
          </Switch>
        </ScrollToTop>  
    </Router>
    );
  }
}

export default App;
