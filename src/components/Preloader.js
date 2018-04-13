import React, {Component} from 'react';

class Preloader extends Component{
  render(){
    return(
      <div className={"d-"+ this.props.prelClass + " preloader"}>
        <h1>Loading...</h1>
        <div className="preloader__container">

          <div className="preloader__container__orbit preloader__container__orbit--1">
            <div className="preloader__container__planet preloader__container__planet--1"></div>
          </div>
          <div className="preloader__container__orbit preloader__container__orbit--2">
            <div className="preloader__container__planet preloader__container__planet--2"></div>
          </div>
          <div className="preloader__container__orbit preloader__container__orbit--3">
            <div className="preloader__container__planet preloader__container__planet--3"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Preloader
