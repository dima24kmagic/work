import React, {Component} from 'react';


/*
 let typingTimer;
 let doneTypingInterval = 5000;
 onChange{
  clearTimeout(typingTimer)
  typingTimer = setTimeout(doneTyping(), doneTypingInterval);
 }
*/








let typingTimer;
let doneTypingInterval = 5000;

class Gallery extends Component{
  /*Our setTimeout function executed when input don't recieve onChange method,
    if it does - we clearTimeout before function is executed
  */
  startSearch = (e) =>{
    let eventValue = e.target.value;
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
    console.log('Hi!');
    let eventValue = e.target.value;
    this.props.onSearch(eventValue);
  }
  render(){
    return(
      <div className="gallery-layout">
        <div className="search-form">
          <h1 className="search-form__heading">Search</h1>
          <input type="text" placeholder="Image" className="search-form__input" onChange={(e)=>this.startSearch(e)} onSubmit={(e)=>this.search(e)}/>
        </div>

        <div className="row gal justify-content-center">

          {this.props.store.getState().images.map((image, i) => {
            return(
              <div className="col-12 col-sm-6 col-lg-4 gal__container" key={i}>
                <img className="gal__pic" src={image.url}></img>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Gallery;
