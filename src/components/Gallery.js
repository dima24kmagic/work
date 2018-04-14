import React, {Component} from 'react';


/*
 let typingTimer;
 let doneTypingInterval = 5000;
 onChange{
  clearTimeout(typingTimer)
  typingTimer = setTimeout(doneTyping(), doneTypingInterval);
 }
*/




//Components
import PreLoader from './Preloader';

let typingTimer;
let doneTypingInterval = 700;

class Gallery extends Component{
  /*
    Our setTimeout function executed when input don't recieve onChange method,
    if it does - we clearTimeout before function is executed
  */
  constructor(props){
    super(props);
    this.state = {
      imgLoaded: 1,
      imgDisplay: "none",
      preloaderDisplay: "none",
      imgQuantity: 1
    }
  }
  startSearch = (e) =>{
    let eventValue = e.target.value;
    this.setState({
      preloaderDisplay: "block",
      imgDisplay: "none",
      imgLoaded: 1
    })
    if(e.target.value == ""){
      this.setState({preloaderDisplay: "none"})
    }
    let search = (e) => {
      this.props.onSearch(e)
    }
    clearTimeout(typingTimer);
    typingTimer = setTimeout(function(){
      console.log(eventValue);
      search(eventValue);
    }, doneTypingInterval);
  }
  render(){
    return(
      <div className="gallery-layout">
        <div className="search-form">
          <form className="search-form__form" onChange={(e)=>this.startSearch(e)} onSubmit={(e)=>this.props.onSearch(e)}>
          <h1 className="search-form__heading">Search For</h1>
          <input type="text" placeholder="Funny Cat's" className="search-form__input"/>
          </form>
        </div>
        <div className="row gal justify-content-center">
          <PreLoader preloaderDisplay={this.state.preloaderDisplay}/>
          {
            /*
                    SHOW IMAGES WHEN THEY COMPLETLY LOADED
              On load i'm gonna increment counter of loaded images,
              if it's qual to images array that was fetched from giphys,
              that's mean, that our images all was uploaded,
              if it's so, i gave images block display and for preloader = display of none,
              and finally refresh counter to a 1 (refreshing counter only if button not worked, if it work - i don't need to refresh counter,
              I shoud do this on typing, 'cause it's gonna be new images array)
            */
            this.props.getStoreState('images').map((image, i) => {
              // console.log(111);
              return(
                <div className="col-12 col-sm-6 col-lg-4 gal__container" key={i}>

                  <img className={"d-"+this.state.imgDisplay+" gal__pic"} src={image.url} alt={image.title}
                    onLoad={()=>{
                      // console.log(this.props.getStoreState('images').length);
                      // console.log(this.state.imgLoaded);
                        if(this.state.imgLoaded == this.props.getStoreState('images').length){
                          this.setState({
                            imgDisplay: "block",
                            preloaderDisplay: "none",
                            imgLoaded: 1
                          })
                          console.log('RESET');
                        }
                        this.setState({imgLoaded: this.state.imgLoaded+1})
                    }}></img>
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
