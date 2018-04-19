
//Dev
import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import {
  HashRouter,
  Route
} from 'react-router-dom';
import axios from 'axios';

import {connect} from 'react-redux'

//Style
import '../css/bootstrap.css';
import '../css/index.css';
import '../css/icon-fonts.css'

// Actions
import {addUser, editUser, saveUser, setImages, startLoading, stopLoading, onLoad} from '../action/actions'

//Components
import Header from './Header';
import Home from './Home';
import Users from './Users';
import Company from './Company';
import AddUser from './Add_user'
import Gallery from './Gallery'


let images = [{url:"nourl"}];
class App extends Component {
  constructor(props){
    super(props);
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

  //FUNC'S FOR ADD-USER Component
  onAddNewUser = (e, stateData) => {
    e.preventDefault();
    this.store.dispatch(addUser(stateData));
    e.currentTarget.reset();
    console.log(stateData);
  }

  // FUNC'S FOR GALLERY COMPONENT
  /*onSearch(e){
      console.log(this.getStoreState('imagesToShow'));
      axios.get(`https://api.giphy.com/v1/gifs/search?q=${e}&api_key=QJ1gAcASwZQRXeHFkC2UcwWSj8SntI0e&limit=${this.getStoreState('imagesToShow')}`)
      .then(response => {
        this.onLoad(true);
        if(response.data.data.length == 0){
          this.onLoad(false)
          console.log("NO RESPONSE!");
          return(
            images = [{url:'http://likesreview.wpengine.com/wp-content/uploads/2017/08/Placeholder_Graphic.jpg', title:'no response'}]
          )
        }else{
          for(let i = 0; i<response.data.data.length; i+=1){
            images[i] = {
              url: response.data.data[i].images.fixed_height.url,
              title: response.data.data[i].title
            }
          }
          return(
            images
          )
        }
      })
      .then(responseData => {
        console.log(responseData[responseData.length-1]);
        console.log(this.getStoreState('images')[this.getStoreState('images').length-1]);
        if(responseData[responseData.length-1].url == this.getStoreState('images')[this.getStoreState('images').length-1].url){
          console.log("EQUAL");
          this.onLoad(false)
        }
          this.store.dispatch(setImages(responseData));
          images = []
      });
  }
  */
  onLoad = (data) => {
      this.store.dispatch(onLoad(data))
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
            <Route path="/users/add" render={AddUser}/>
            <Route path="/gallery" component={Gallery}/>
            <Route exact path="/company" component={Company}/>
          </div>
        </Fragment>
      </HashRouter>
    );
  }
}

export default App;
