import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {editUser} from '../action/actions'
//components

import {addUser} from '../action/actions'


// console.log(pic1);

class Users extends Component{
  constructor(props){
    super(props);
    this.state = {
      "name": "",
      "gender": true,
      "age": 0,
      "education": "",
      "job": "",
      "havekids": true,
      "pic": ""
    }
  }

  getInput = (e, stateField) => {
    console.log(11, this.state[stateField]);
    this.setState({
      [stateField]: e.target.value
    })
  }

  editUser = (e, index) => {
    // e.preventDefault();
    console.log(e, index);
    console.log(this.state);
    this.props.store.dispatch(editUser(index));
    this.setState({
      "name": "",
      "gender": true,
      "age": '&nbsp',
      "education": "",
      "job": "",
      "havekids": true,
      "pic": ""
    })
  }
  testEdit = (index) => {
    this.props.store.dispatch(editUser(index));
    console.log(this.props.store.getState(), index);
  }
  test =  (e, index) => {
    e.preventDefault();
    console.log(41, index);
    this.props.store.dispatch(editUser(index));
    this.setState({
      "name": "",
      "gender": true,
      "age": '&nbsp',
      "education": "",
      "job": "",
      "havekids": true,
      "pic": ""
    })
  }
  render(){
    return(
        <div className="users">
          {this.props.store.getState().userReducer.users.map((user, index) => {
            if(user.isEditing){
              return(
                  <form onChange={(e)=>this.getInput(e, e.target.name)} onSubmit={(e)=>this.test(e, index)} className='edit__form ' key={index}>
                  <div className='d-flex row user__row user__row--edit flex-xs-column flex-sm-row'>
                    <div className="edit" onClick={()=>this.testEdit(index)}>Save</div>

                    <div className='col-12 photo photo--edit col-sm-4'>
                      <input type='file' name="pic"/>
                      <img src={user.pic}></img>
                    </div>
                    <div className='col-12 col-sm-8 '>
                      <div className='row'>
                        <div className='d-flex col-12 name name--edit justify-content-center justify-content-sm-start'><input required type='text' maxLength="40" placeholder={user.name} name="name"/>
                          <span>{user.gender == true ? 'Male' : 'Female'}</span>
                        </div>
                        <div className='col-8 lead info'>
                          <p>Age: <input required type='number' maxLength="20" placeholder={user.age} name="age"/> <br/>
                          Education: <input required type='text' maxLength="20" placeholder={user.education} name="education"/> <br/>
                        Job: <input required type='text' maxLength="20" placeholder={user.job} name="job"/></p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <button className="btn btn--green">ADD</button>
                  </form>
              )
            }else{
              return(
                  <div key={index} className='d-flex row user__row flex-xs-column flex-sm-row'>
                    <div className="edit" onClick={()=>this.testEdit(index)}>edit</div>
                    <div className='col-12 photo col-sm-4'><img src={user.pic}></img></div>
                    <div className='col-12 col-sm-8 '>
                      <div className='row'>
                        <div className='d-flex col-12 name justify-content-center justify-content-sm-start'>{user.name}
                          <span>{user.gender == true ? 'Male' : 'Female'}</span>
                        </div>
                        <div className='col-12 lead info'><p>Age: {user.age} <br/>Education: {user.education} <br/>Job: {user.job}</p></div>
                      </div>
                    </div>
                  </div>
              )
            }
            return(<React.Fragment></React.Fragment>)
          })}
          <div className='u-center-text'><Link className="btn btn--green" to="/users/add">Add user</Link></div>
        </div>
    )
  }
}

export default Users;
