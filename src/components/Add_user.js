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
          <div className="group">
            <input className="group__item" type="text" id="lname" placeholder="Last Name"/>
            <label className="group__item__label" htmlFor="lname">Last Name</label>
          </div>
        </form>
      </div>
    )
  }
}

export default Add_user;
