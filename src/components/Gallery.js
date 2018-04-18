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
import Images from './Images'

let typingTimer;
let doneTypingInterval = 700;
let previousInput = "";
class Gallery extends Component{
  /*
    Our setTimeout function executed when input don't recieve onChange method,
    if it does - we clearTimeout before function is executed
  */
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      imgLoaded: 1
    }
  }
  startSearch = (e) =>{
    console.log(e.keyCode);
    let eventValue = e.target.value;
    if(eventValue.slice(-1) == " "){
      console.log('SPACE IS PRESSED');
    }
    if(eventValue.slice(-1) !== " " && eventValue.slice(-1) !== ""){
      this.setState({loading:true})
      clearTimeout(typingTimer);
      typingTimer = setTimeout(function(){
        console.log(eventValue);
        search(eventValue);
      }, doneTypingInterval);
    }
    let search = (e) => {
      this.props.onSearch(e)
    }
    if(e.target.value == ""){
      this.setState({loading:false})
    }
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
          {
            (this.props.getStoreState('isLoading'))
            ? <PreLoader/>
            : ""
          }
          {
            this.props.getStoreState('images').map((image, i) => {
              /*
              So, when onSearch Function start, it's set to store urls of images
              When it's does, our store subscribe is triggered
              and this component start to rendering
              --- Preloader shown when we start typing,
              and it's gonna hide, when at all of the images triggered
              onLoad event and they increment counter of loaded images
              if length of all images loaded equal to length of images from the store
              we gonna set loading to false
              */

              /* ---BUG: Whn we press space and then backspace - preloader is shown
              but it's never goes back, because store value don't change
              and images don't rendering. so, onLoad event doesnt executed

              ---UPD: Gonna try to trouble shoot this with
              if/else statement on fetching data, if data that''s fetched EQUAL to data
              that's already in store - don't do the dispatch
              */
              return(
                <div className="col-12 col-sm-6 col-lg-4 gal__container" key={i}>

                  <img className={"d-"+this.state.imgDisplay+" gal__pic"} src={image.url} alt={image.title}
                    onLoad={()=>{
                      if(this.state.imgLoaded == this.props.getStoreState('images').length){
                        this.setState({loading: false, imgLoaded: 1})
                      }else{
                        this.setState({imgLoaded: this.state.imgLoaded+1})
                      }
                    }}></img>
                </div>
              )
            })}
          </div>
        <div className="u-center-text mt-4"><div className="btn btn--green">Show More</div></div>
      </div>
    )
  }
}

export default Gallery;
