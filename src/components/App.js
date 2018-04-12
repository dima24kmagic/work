
//Dev
import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import {
  HashRouter,
  Route
} from 'react-router-dom';
import axios from 'axios';

//Style
import '../css/bootstrap.css';
import '../css/index.css';
import '../css/icon-fonts.css'

// Actions
import {setImages} from '../action/actions'

//Components
import Header from './Header';
import Home from './Home';
import Users from './Users';
import Company from './Company';
import AddUser from './Add_user'
import Gallery from './Gallery'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: 'wasup!'
    }
    this.store = this.props.store;
  }
  onSearch(e){
      console.log(e);
      axios.get(`https://api.giphy.com/v1/gifs/search?q=${e}&api_key=QJ1gAcASwZQRXeHFkC2UcwWSj8SntI0e&limit=6`)
      .then(response => {
        console.log(response.data.data);
        return(
        response.data.data
      )
      })
      .then(responseData => this.store.dispatch(setImages(responseData)));
  }
  testFunc = () => {
    console.log("Work");
  }
  render() {
    console.log(this.store.getState());
    return (
      <HashRouter>
        <Fragment>
          <Header store={this.store}/>
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route exact path="/users" render={()=><Users store={this.store}/>}/>
            <Route path="/users/add" render={()=><AddUser store={this.store}/>}/>
            <Route path="/gallery" render={()=><Gallery store={this.store} onSearch={(e)=>this.onSearch(e)} testFunc={this.testFunc}/>}/>
            <Route exact path="/company" component={Company}/>
          </div>
        </Fragment>
      </HashRouter>
    );
  }
}
export default App;
