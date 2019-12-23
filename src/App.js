import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ScrollToTop from './ScrollToTop';


import LandingPage from './components/LandingPage';
import HardwoodPage from "./components/HardwoodPage/HardwoodPage";
import Retailers from './components/Retailers/Retailers';


var history = createBrowserHistory();

class App extends Component {
  render(){
    return(
      <Router history={history}>
        <ScrollToTop>
          <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/Hardwood" component={HardwoodPage}/>
              <Route path="/Retailers" component={Retailers}/>
          </Switch>
        </ScrollToTop>  
    </Router>
    );
  }
}

export default App;
