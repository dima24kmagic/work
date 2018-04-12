import React, {Component} from 'react';

class Gallery extends Component{
  test = (e) => {
    console.log(e.target.value);
  }
  render(){
    return(
      <div className="gallery-layout">

        <div className="search-form">
          <h1 className="search-form__heading">Search</h1>
          <input type="text" placeholder="Image" className="search-form__input" onChange={(e)=>window.setTimeout(this.props.onSearch(e), 50000)
}/>
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
