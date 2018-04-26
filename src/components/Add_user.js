import React, {Component} from 'react';
import {connect} from 'react-redux';

//Actions
import {addUser} from '../action/actions'
//API
import {addUserFetch} from '../api/api'

class Add_user extends Component {
  constructor(props){
    super(props);
    this.state = {
      "name": "",
      "gender": true,
      "age": "0",
      "education": "",
      "job": "",
      "havekids": true,
      "pic": ""
    }
  }
  getInput = (e, stateField) => {
      this.setState({
        [stateField]: e.target.value
      })
    console.log(this.state);
  }
  render(){
    return(
      <div className="users__form">
        <h1 className="mb-2">Add New User!</h1>
        <form className="form" onChange={(e)=>this.getInput(e, e.target.name)} onSubmit={(e)=>this.props.addNewUser(e, this.state)}>
          <div className="group">
            <input maxLength='40' className="group__item" type="text" id="fname" placeholder="First Name" name='name' required/>
            <label className="group__item__label" htmlFor="fname">First Name</label>
          </div>
          <div className="group group__checkbox">
            <input maxLength='20' className="group__item group__checkbox__item " defaultChecked='true' type="radio" value='true' id="male" name='gender'/>
            <label className="group__item__label group__checkbox__label" htmlFor="male"><span className='outter-circle'><span className='inner-circle'></span></span><p>Male</p></label>
            <input maxLength='20' className="group__item group__checkbox__item" type="radio" value='false' id="female" name='gender'/>
            <label className="group__item__label group__checkbox__label" htmlFor="female"><span className='outter-circle'><span className='inner-circle'></span></span><p>Female</p></label>
          </div>
          {/* WTF IS GOING ON WITH THE FUCKING NUMBER TYPE INPUT, STUPID ASS MUHFUCKAS DID SMTHNG WRONG AND NOW I CAN'T FIGURE OUT TF IS GOING ON!!!!! */}
          <div className="group">
            <input maxLength='20' className="group__item" type="number" id="age" placeholder="Age" name="age" required/>
            <label className="group__item__label" htmlFor="age">Age</label>
          </div>
          <div className="group">
            <input maxLength='20' className="group__item" type="text" id="edu" placeholder="Education" name="education" required/>
            <label className="group__item__label" htmlFor="edu">Education</label>
          </div>
          <div className="group">
            <input maxLength='20' className="group__item" type="text" id="job" placeholder="Job" name="job" required/>
            <label className="group__item__label" htmlFor="job">Job</label>
          </div>
          <div className="group group__checkbox">
            <input maxLength='20' className="group__item group__checkbox__item " defaultChecked='true' type="radio" value='true' id="kids" placeholder="Last Name" name='havekids'/>
            <label className="group__item__label group__checkbox__label" htmlFor="kids"><span className='outter-circle'><span className='inner-circle'></span></span><p>Have Kids</p></label>
            <input maxLength='20' className="group__item group__checkbox__item" type="radio" value='false' id="free" placeholder="Last Name" name='havekids'/>
            <label className="group__item__label group__checkbox__label" htmlFor="free"><span className='outter-circle'><span className='inner-circle'></span></span><p>Free</p></label>
          </div>
          <div className="group">
            <input  className="group__item" type="text" id="pic" placeholder="Profile Pic" name="pic" required/>
            <label className="group__item__label" htmlFor="pic">Profile Pic</label>
          </div>
          <button className="btn btn--green">Add</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    null: null
  }
}
const mapDispatchToProps = dispatch => {
  return{
    addNewUser: (e, stateData) => {
      e.preventDefault();
      addUserFetch(stateData);
      e.currentTarget.reset();
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add_user);
