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

  onLoad img increment counter by one, it's also trigger check action,
  if counter == images length it's trigger stopLoading action

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
      prelClass: 'flex'
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
          <form className="search-form__form" onChange={(e)=>this.startSearch(e)} onSubmit={(e)=>this.search(e)}>
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
                      this.props.onCheck(this.state);
                      this.setState({
                        imgLoaded: this.state.imgLoaded+1
                      })
                      if(!this.props.getStoreState('isLoading')){
                        this.setState(
                          {
                            display:'block',
                            imgLoaded: 1,
                            prelClass: 'none'
                          })
                      }
                      if(this.state.imgLoaded !== this.props.getStoreState('images').length){
                        this.setState({
                          display:'none',
                          prelClass: 'flex'
                        })
                      }
                    }}></img>
                  <PreLoader prelClass={this.state.prelClass}/>
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
