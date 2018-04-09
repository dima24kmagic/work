
//Dev
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//Style
import '../css/index.css';

//Components
import Header from './Header';
import Home from './Home';
import Users from './Users';
import Company from './Company';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="app">
            <Header />
            <Route exact path="/" component={Home}/>
            <Route exact path="/users" component={Users}/>
            <Route exact path="/company" component={Company}/>
          </div>
      </BrowserRouter>
    );
  }
}
export default App;
