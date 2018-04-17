
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
import {addUser, editUser, saveUser, setImages, startLoading, stopLoading, onLoad} from '../action/actions'

//Components
import Header from './Header';
import Home from './Home';
import Users from './Users';
import Company from './Company';
import AddUser from './Add_user'
import Gallery from './Gallery'


let images = [];
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
        if(response.data.data.length == 0){
          this.onLoad(false)
          return(
            [{images:{fixed_height:{url:'http://likesreview.wpengine.com/wp-content/uploads/2017/08/Placeholder_Graphic.jpg', title:'no response'}}}]
          )
        }else{
          this.onLoad(true);
          // console.log("IMAGES ARRAY ---->", images, "STORE IMAGES ARRAY ------>", this.getStoreState('images'));
          console.log(response.data.data);
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
          this.store.dispatch(setImages(responseData));
      });
  }

  onCheck = (stateData) => {
    this.store.dispatch(check({imgLoaded: stateData.imgLoaded, imagesFull: this.getStoreState('images')}));
  }

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
                             onLoad={this.onLoad}/>
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
