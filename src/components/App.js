
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
import {addUser, editUser, saveUser, setImages, startLoading, stopLoading, check} from '../action/actions'

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

  //FUNCTION FOR PASSING STORE STATE
  getStoreState = (storeValue) => {
    return this.store.getState()[storeValue]
  }

  // FUNC'S FOR USER COMPONENT
  onSaveUserEdit = (e, index, stateData) => {
    e.preventDefault();
    stateData.index = index;
    this.store.dispatch(saveUser(stateData))
  }
  onUserEdit = (index) => {
    this.store.dispatch(editUser(index))
  }

  //FUNC'S FOR ADD-USER Component
  onAddNewUser = (e, stateData) => {
    e.preventDefault();
    this.store.dispatch(addUser(stateData));
    e.currentTarget.reset();
    console.log(stateData);
  }

  // FUNC'S FOR GALLERY COMPONENT
  onSearch(e){
      axios.get(`https://api.giphy.com/v1/gifs/search?q=${e}&api_key=QJ1gAcASwZQRXeHFkC2UcwWSj8SntI0e&limit=${3*2}`)
      .then(response => {
        console.log(response.data.data);
        return(
          response.data.data
        )
      })
      .then(responseData => {
        // this.store.dispatch(stopLoading());
        this.store.dispatch(setImages(responseData));
      });
  }

  onCheck = (stateData) => {
    this.store.dispatch(check({imgLoaded: stateData.imgLoaded, imagesFull: this.getStoreState('images')}));
  }

  render() {
    console.log(this.store.getState());
    return (
      <HashRouter>
        <Fragment>
          <Header store={this.store}/>
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route exact path="/users" render={
                ()=>{
                  return(
                    <Users getStoreState={this.getStoreState}
                           onSaveUserEdit={this.onSaveUserEdit}
                           onUserEdit={this.onUserEdit}
                           />
                   )
                     }}/>
            <Route path="/users/add" render={
                ()=>{
                  return(
                    <AddUser onAddNewUser={this.onAddNewUser}/>
                  )
                }
            }/>
            <Route path="/gallery" render={
                ()=>{
                  return(
                    <Gallery getStoreState={this.getStoreState}
                             onSearch={(e)=>this.onSearch(e)}
                             onCheck={this.onCheck}/>
                  )
                }
            }/>
            <Route exact path="/company" component={Company}/>
          </div>
        </Fragment>
      </HashRouter>
    );
  }
}
export default App;
