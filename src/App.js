import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ScrollToTop from './ScrollToTop';

import CarePage from './components/Care/Care';
import LandingPage from './components/LandingPage';
import HardwoodPage from "./components/HardwoodPage/HardwoodPage";
import Retailers from './components/Retailers/Retailers';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Panels from './components/Panels/Panels';
import Docs from './components/Docs/Docs';
import Accessories from './components/Accessories/Accessories';

class App extends Component {
  render(){
    return(
        <ScrollToTop>
          <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/Hardwood" component={HardwoodPage}/>
              <Route path="/Retailers" component={Retailers}/>
              <Route path="/Contact" component={Contact}/>
              <Route path="/Care" component={CarePage}/>
              <Route path="/Login" component={Login}/>
              <Route path="/Panels" component={Panels}/>
              <Route path="/Docs" component={Docs}/>
              <Route path="/Accessories" component={Accessories}/>
          </Switch>
        </ScrollToTop>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);
