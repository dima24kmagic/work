import React, {Component} from 'react';

import PreLoader from './Preloader';
class Images extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading: false
    }
  }
  render(){
    return(
      <React.Fragment>
        {
          (this.props.getStoreState('isLoading'))
          ? <PreLoader/>
          : console.log("Store is set as false")
        }
        {
          this.props.getStoreState('images').map((image, i) => {
            // console.log(111);
            return(
              <div className="col-12 col-sm-6 col-lg-4 gal__container" key={i}>
                <img className="gal__pic" src={image.url} alt={image.title}
                  onLoad={()=>{
                    console.log(i);
                    if(i+1 == this.props.getStoreState('images').length){
                      console.log("-------------> set to false");
                      this.props.onLoad(false);
                    }
                  }}></img>
              </div>
            )
          })
        }
      </React.Fragment>
    )
  }
}

export default Images;
