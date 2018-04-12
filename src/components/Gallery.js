import React, {Component} from 'react';

class Gallery extends Component{
  test = (e) => {
    console.log(e.target.value);
    let event = e;
    setTimeout(function(e){console.log(e)}, 2000, e)
    // this.props.onSearch(e)
  }
  testpass = (e) => {
    console.log(e);
    // this.props.onSearch(e)
  }
  change = (e) =>{
    let eventValue = e;
    var test = this.props.onSearch(eventValue);
    setTimeout(function(){
      console.log(eventValue);
    }, 5000);
  }
  render(){
    return(
      <div className="gallery-layout">

        <div className="search-form">
          <h1 className="search-form__heading">Search</h1>
          <input type="text" placeholder="Image" className="search-form__input" onChange={(e)=>this.change(e)}/>
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
