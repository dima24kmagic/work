import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios';

//Components
import PreLoader from './Preloader';
import Images from './Images'

//Actions
import {setImages, onLoad, chngImgCount, setImgCounter} from '../action/actions'

//vars
let typingTimer;
let doneTypingInterval = 700;
let previousInput = "";
let images = [{url:"nourl"}];
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

    //REF FOR GETTING INPUT
    this.textInput = React.createRef();
  }

  mySearch = (searchVal) => {
    console.log(this.props.imagesToShow);
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=QJ1gAcASwZQRXeHFkC2UcwWSj8SntI0e&limit=${this.props.imagesToShow}`)
    .then(response => {
      this.props.onLoad(true);
      if(response.data.data.length == 0){
        this.props.onLoad(false)
        console.log("NO RESPONSE!");
        return(
          images = [{url:'http://likesreview.wpengine.com/wp-content/uploads/2017/08/Placeholder_Graphic.jpg', title:'no response'}]
        )
      }else{
        for(let i = 0; i<response.data.data.length; i+=1){
          images[i] = {
            url: response.data.data[i].images.fixed_height.url,
            title: response.data.data[i].title
          }
        }
        return(
          images
        )
      }
    })
    .then(responseData => {
      console.log(responseData[responseData.length-1]);
      console.log(this.props.images[this.props.images.length-1]);
      if(this.props.images.length == 3 && responseData[responseData.length-1].url == this.props.images[this.props.images.length-1].url){
        console.log("EQUAL");
        this.props.onLoad(false)
      }else{
        this.props.setImages(responseData);
        images = []
      }
    });
  }

  refreshShowImageCounter = () => {
    this.props.setImgCounter(3);
  }

  onInputChange = () => {
    this.setState({
      imgLoaded: 1
    })
  }

  startSearch = (searchVal) =>{
    if(searchVal.slice(-1) == " "){
      console.log('SPACE IS PRESSED');
    }
    if(searchVal.slice(-1) !== " " && searchVal.slice(-1) !== ""){
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => {
        this.mySearch(searchVal)
      }, doneTypingInterval);
    }

  }

  render(){

    return(
      <div className="gallery-layout">
        <div className="search-form">
          <form className="search-form__form" onChange={(e)=>{
              this.refreshShowImageCounter();
              this.onInputChange();
              this.startSearch(this.textInput.current.value);
            }}
            onSubmit={(e)=>this.props.onSearch(e)}>
          <h1 className="search-form__heading">Search For</h1>
          <input ref={this.textInput} type="text" placeholder="Funny Cat's" className="search-form__input"/>
          </form>
        </div>
        <div className="row gal justify-content-center">
          {
            (this.props.isLoading)
            ? <PreLoader />
            : ""
          }
          {
            this.props.images.map((image, i) => {
            return(
              <div className="col-12 col-sm-6 col-lg-4 gal__container" key={i}>
                <img className="gal__pic" src={image.url} alt={image.title}
                  onLoad={()=>{
                      console.log(this.state.imgLoaded, this.props.isLoading);
                      if(this.state.imgLoaded == this.props.images.length){
                        this.props.onLoad(false)
                        console.log(this.props.isLoading);
                        this.setState({imgLoaded: this.state.imgLoaded+1})
                      }else{
                        this.setState({imgLoaded: this.state.imgLoaded+1})
                      }
                    }}></img>
              </div>
            )
          })
        }
        </div>
        <div className="u-center-text mt-4"><div className="btn btn--green" onClick={() => {this.props.chngImgCount(3); this.startSearch(this.textInput.current.value)}}>Show More</div></div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return{
    images: state.images,
    isLoading: state.isLoading,
    imagesToShow: state.imagesToShow
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onLoad: data => dispatch(onLoad(data)),
    chngImgCount: data => dispatch(chngImgCount(data)),
    setImgCounter: data => dispatch(setImgCounter(data)),
    setImages: data => dispatch(setImages(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)

// export default Gallery;
