
//Dev
import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import {
  HashRouter,
  Route
} from 'react-router-dom';

//Style
import '../css/bootstrap.css';
import '../css/index.css';
import '../css/icon-fonts.css'

//Components
import Header from './Header';
import Home from './Home';
import Users from './Users';
import Company from './Company';
import AddUser from './Add_user'
import Gallery from './Gallery'

//START
class App extends Component {
  constructor(props){
    super(props);
    this.store = this.props.store;
  }
  //FUNCTION FOR FAST STORE STATE
  getStoreState = (storeValue) => {
    return this.store.getState()[storeValue]
  }

  render() {
    // console.log(this.store.getState());
    return (
      <HashRouter>
        <Fragment>
          <Header store={this.store}/>
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route exact path="/users" component={Users}/>
            <Route path="/users/add" component={AddUser}/>
            <Route path="/gallery" component={Gallery}/>
            <Route exact path="/company" component={Company}/>
          </div>
        </Fragment>
      </HashRouter>
    );
  }
}

export default App;
