import React, {Component} from 'react';


/*
 let typingTimer;
 let doneTypingInterval = 5000;
 onChange{
  clearTimeout(typingTimer)
  typingTimer = setTimeout(doneTyping(), doneTypingInterval);
 }
*/


/*
///////////////// SHOW IMAGES WHEN THEY COMPLETLY LOADED ////////////////////

  We got loaded prop in each img, default is false,
  in map function on onLoad img event I'm gonna
  set loaded prop of every img in img array to true
  and check if all of them set to true = clear preloader
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
      input: "",
      imgLoaded: 1,
      display: 'none',
      preloaderClass: 'flex',
      loaded: [
        {

        }
      ]
    }
  }
  startSearch = (e) =>{
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

            this.props.getStoreState('images').map((image, i) => {
              console.log(111);
              return(
                <div className="col-12 col-sm-6 col-lg-4 gal__container" key={i}>
                  <img className={"d-"+this.state.display+" gal__pic"} src={image.url} alt={image.title}
                    onLoad={()=>{
                      /*Check check for img loaded to the page and compare it imgs array length*/
                      this.props.onCheck(this.state);
                      //Add the img loaded counter
                      this.setState({
                        imgLoaded: this.state.imgLoaded+1
                      })
                      //IF NOT loading, set display to block and preloader display to none, reset imgLoaded counter
                      if(!this.props.getStoreState('isLoading')){
                        this.setState(
                          {
                            display:'block',
                            imgLoaded: 1,
                            preloaderClass: 'none'
                          })
                      }
                      // set the preloader display flex and img display none
                      if(this.state.imgLoaded !== this.props.getStoreState('images').length){
                        this.setState({
                          display:'none',
                          preloaderClass: 'flex'
                        })
                      }
                    }}></img>
                  <PreLoader prelClass={this.state.preloaderClass}/>
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
