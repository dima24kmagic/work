
//Dev
import React, { Component, /*Fragment*/ } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//Style
import '../css/bootstrap.css';
import '../css/index.css';

//Components
import Header from './Header';
import Home from './Home';
import Users from './Users';
import Company from './Company';
import Add_user from './Add_user'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: 'wasup!'
    }
    this.store = this.props.route.store;
  }
  render() {
    console.log(this.store.getState());
    return (
      <BrowserRouter>
          <div className="app">
            <Header store={this.store}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/" render={()=><Users store={this.store}/>}/>
            <Route path="/users/add" render={()=><Add_user store={this.store}/>}/>
            <Route exact path="/company" component={Company}/>
          </div>
      </BrowserRouter>
    );
  }
}
export default App;
