import React, {Component} from 'react';

class Add_user extends Component {
  render(){
    return(
      <div className="users__form">
        <form className="form">
          <div className="group">
            <input className="group__item" type="text" id="fname" placeholder="First Name"/>
            <label className="group__item__label" htmlFor="fname">First Name</label>
          </div>
          <div className="group group__checkbox">
            <input className="group__item group__checkbox__item " type="radio" id="male" name='gender'/>
            <label className="group__item__label group__checkbox__label" htmlFor="male"><span className='outter-circle'><span className='inner-circle'></span></span><p>Male</p></label>
            <input className="group__item group__checkbox__item" type="radio" id="female" name='gender'/>
            <label className="group__item__label group__checkbox__label" htmlFor="female"><span className='outter-circle'><span className='inner-circle'></span></span><p>Female</p></label>
          </div>
          <div className="group">
            <input className="group__item" type="number" id="age" placeholder="Age"/>
            <label className="group__item__label" htmlFor="age">Age</label>
          </div>
          <div className="group">
            <input className="group__item" type="text" id="edu" placeholder="Education"/>
            <label className="group__item__label" htmlFor="edu">Education</label>
          </div>
          <div className="group">
            <input className="group__item" type="text" id="job" placeholder="Job"/>
            <label className="group__item__label" htmlFor="job">Job</label>
          </div>
          <div className="group group__checkbox">
            <input className="group__item group__checkbox__item " type="radio" id="kids" placeholder="Last Name" name='kids'/>
            <label className="group__item__label group__checkbox__label" htmlFor="kids"><span className='outter-circle'><span className='inner-circle'></span></span>Have Kids</label>
            <input className="group__item group__checkbox__item" type="radio" id="free" placeholder="Last Name" name='kids'/>
            <label className="group__item__label group__checkbox__label" htmlFor="free"><span className='outter-circle'><span className='inner-circle'></span></span>Free</label>
          </div>
        </form>
      </div>
    )
  }
}

export default Add_user;
