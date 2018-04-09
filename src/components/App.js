
//Dev
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//Actions
import { voteAngular, voteReact, voteVuejs } from '../action/actions';
//Style
import '../css/index.css';

//Components
import Header from './Header';
import Home from './Home';
import Users from './Users';
import Company from './Company';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: 'wasup!'
    }
    this.store = this.props.route.store;
  }
  render() {
    console.log(this.store);
    return (
      <BrowserRouter>
          <div className="app">
            <Header store={this.store}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/users" component={Users}/>
            <Route exact path="/company" component={Company}/>
          </div>
      </BrowserRouter>
    );
  }
}
export default App;
