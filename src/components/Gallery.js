import React, {Component} from 'react';


/*
 let typingTimer;
 let doneTypingInterval = 5000;
 onChange{
  clearTimeout(typingTimer)
  typingTimer = setTimeout(doneTyping(), doneTypingInterval);
 }
*/



import {stopLoading, startLoading} from '../action/actions'
//




let typingTimer;
let doneTypingInterval = 700;

class Gallery extends Component{
  /*Our setTimeout function executed when input don't recieve onChange method,
    if it does - we clearTimeout before function is executed
  */
  constructor(props){
    super(props);
    this.state = {
      input: ""
    }
  }
  startSearch = (e) =>{
    this.props.store.dispatch(startLoading());
    let eventValue = e.target.value;
    this.setState({
      input: e.target.value
    })
    var test = (e) => {
      this.props.onSearch(e)
    }
    clearTimeout(typingTimer);
    typingTimer = setTimeout(function(){
      console.log(eventValue);
      test(eventValue);
    }, doneTypingInterval);
  }
  search = (e) => {
    e.preventDefault();
    console.log(this.state.input);
    this.props.onSearch(this.state.input);
  }
  render(){
    console.log(this.props.store.getState().isLoading);
    return(
      <div className="gallery-layout">
        <div className="search-form">
          <form className="search-form__form" onChange={(e)=>this.startSearch(e)} onSubmit={(e)=>this.search(e)}>
          <h1 className="search-form__heading">Search For</h1>
          <input type="text" placeholder="Funny Cat's" className="search-form__input"/>
          </form>
        </div>

        <div className="row gal justify-content-center">
          {

            (this.props.store.getState().isLoading)
            ? <h1>Loading</h1>
            : this.props.store.getState().images.map((image, i) => {
              console.log(111);
              return(
                <div className="col-12 col-sm-6 col-lg-4 gal__container" key={i}>
                  <img className="gal__pic" src={image.url} alt={image.title}></img>
                </div>
              )
            })
          }
        </div>
        <div className="u-center-text mt-4"><div className="btn btn--green">Show More</div></div>
      </div>
    )
  }
}

export default Gallery;
