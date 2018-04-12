import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {editUser, saveUser} from '../action/actions'
//components

// import {addUser} from '../action/actions'
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
  userEdit = (index) => {
    this.props.store.dispatch(editUser(index));
  }
  getInput = (e, stateField) => {
    console.log(11, this.state[stateField]);
    this.setState({
      [stateField]: e.target.value
    })
  }
  saveUser = (e, index) => {
    e.preventDefault();
    let data = this.state;
    data.index = index;
    console.log(data);
    this.props.store.dispatch(saveUser(data))
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
          {this.props.store.getState().users.map((user, index) => {
            if(user.isEditing){
              return(
                  <form onChange={(e)=>this.getInput(e, e.target.name)} onSubmit={(e)=>this.saveUser(e, index)} className='edit__form ' key={index}>
                  <div className='d-flex row user__row user__row--edit flex-xs-column flex-sm-row'>
                    <div className="edit" onClick={()=>this.userEdit(index)}>Save</div>

                    <div className='col-12 photo photo--edit col-sm-4'>
                      <input type='file' name="pic"/>
                      <img alt="user pic" src={user.pic}></img>
                    </div>
                    <div className='col-12 col-sm-8 '>
                      <div className='row'>
                        <div className='d-flex col-12 name name--edit justify-content-center justify-content-sm-start'><input required type='text' maxLength="40" placeholder={user.name} name="name"/>
                          <span>{user.gender === true ? 'Male' : 'Female'}</span>
                        </div>
                        <div className='col-8 lead info'>
                          <p>Age: <input required type='number' maxLength="20" placeholder={user.age} name="age"/> <br/>
                          Education: <input required type='text' maxLength="20" placeholder={user.education} name="education"/> <br/>
                        Job: <input required type='text' maxLength="20" placeholder={user.job} name="job"/></p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <button className="d-none btn btn--green">ADD</button>
                  </form>
              )
            }else{
              return(
                  <div key={index} className='d-flex row user__row flex-xs-column flex-sm-row'>
                    <div className="edit" onClick={()=>this.userEdit(index)}><i className="software-pencil"></i></div>
                    <div className='col-12 photo col-sm-4'><img alt="user pic" src={user.pic}></img></div>
                    <div className='col-12 col-sm-8 '>
                      <div className='row'>
                        <div className='d-flex col-12 name justify-content-center justify-content-sm-start'>{user.name}
                          <span>{user.gender === true ? 'Male' : 'Female'}</span>
                        </div>
                        <div className='col-12 lead info'><p>Age: {user.age} <br/>Education: {user.education} <br/>Job: {user.job}</p></div>
                      </div>
                    </div>
                  </div>
              )
            }
          })}
          <div className='u-center-text'><Link className="btn btn--green" to="/users/add">Add user</Link></div>
        </div>
    )
  }
}

export default Users;
