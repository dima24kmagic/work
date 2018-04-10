import React, {Component} from 'react';
import {addUser} from '../action/actions'
class Add_user extends Component {
  constructor(props){
    super(props);
    this.state = {
      "name": "",
      "gender": true,
      "age": 0,
      "education": "",
      "job": "",
      "havekids": true
    }
  }

  getInput = (e, stateField) => {
    this.setState({
      [stateField]: e.target.value
    })
    console.log(e.target.value, 'SUP MAN!', this.state[stateField]);
  }

  addNewUser = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.store.dispatch(addUser(this.state));
    this.setState({
      "name": "",
      "gender": true,
      "age": null,
      "education": "",
      "job": "",
      "havekids": true
    })
  }
  render(){
    return(
      <div className="users__form">
        <h1 className="mb-2">Add New User!</h1>
        <form className="form" onChange={(e)=>this.getInput(e, e.target.name)} onSubmit={(e)=>this.addNewUser(e)}>
          <div className="group">
            <input value={this.state.name} className="group__item" type="text" id="fname" placeholder="First Name" name='name' required/>
            <label className="group__item__label" htmlFor="fname">First Name</label>
          </div>
          <div className="group group__checkbox">
            <input className="group__item group__checkbox__item " defaultChecked='true' type="radio" value='true' id="male" name='gender'/>
            <label className="group__item__label group__checkbox__label" htmlFor="male"><span className='outter-circle'><span className='inner-circle'></span></span><p>Male</p></label>
            <input className="group__item group__checkbox__item" type="radio" value='false' id="female" name='gender'/>
            <label className="group__item__label group__checkbox__label" htmlFor="female"><span className='outter-circle'><span className='inner-circle'></span></span><p>Female</p></label>
          </div>
          {/* WTF IS GOING ON WITH THE FUCKING NUMBER TYPE INPUT, STUPID ASS MUHFUCKAS DID SMTHNG WRONG AND NOW I CAN'T FIGURE OUT TF IS GOING ON!!!!! */}
          <div className="group">
            <input number="2"  className="group__item" type="number" id="age" placeholder="Age" name="age" onClick={(e) => console.log(e.target.value)}/>
            <label className="group__item__label" htmlFor="age">Age</label>
          </div>
          <div className="group">
            <input value={this.state.education} className="group__item" type="text" id="edu" placeholder="Education" name="education" required/>
            <label className="group__item__label" htmlFor="edu">Education</label>
          </div>
          <div className="group">
            <input value={this.state.job} className="group__item" type="text" id="job" placeholder="Job" name="job" required/>
            <label className="group__item__label" htmlFor="job">Job</label>
          </div>
          <div className="group group__checkbox">
            <input className="group__item group__checkbox__item " defaultChecked='true' type="radio" value='true' id="kids" placeholder="Last Name" name='havekids'/>
            <label className="group__item__label group__checkbox__label" htmlFor="kids"><span className='outter-circle'><span className='inner-circle'></span></span><p>Have Kids</p></label>
            <input className="group__item group__checkbox__item" type="radio" value='false' id="free" placeholder="Last Name" name='havekids'/>
            <label className="group__item__label group__checkbox__label" htmlFor="free"><span className='outter-circle'><span className='inner-circle'></span></span><p>Free</p></label>
          </div>
          <button className="btn btn--green">Add</button>
        </form>
      </div>
    )
  }
}

export default Add_user;
