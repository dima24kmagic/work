import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

//actions
import {editUser, saveUser, getUsers} from '../action/actions'

//API
import {deleteUser} from '../api/api'

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
  onDeleteUser = (id) => {
    fetch(`http://localhost:3000/peoples/${id}`, {
      withCredentials: true,
      method: 'DELETE'
    }).then((res) => {
      return res.body
    }).then((resData) => {
      console.log(resData.getReader());
      return resData
    })
  }
  getInput = (e, stateField) => {
    console.log(11, this.state[stateField]);
    this.setState({
      [stateField]: e.target.value
    })
  }

  componentDidMount() {
    fetch("http://localhost:3000/peoples")
      .then((res) => {
        return res.json()
      }).then((resData) => {
        this.props.getUsers(resData)
      })
  }
  render(){

    return(
        <div className="users">
          {this.props.users.map((user, index) => {
            if(user.isEditing){
              return(
                  <form onChange={(e)=>this.getInput(e, e.target.name)} onSubmit={(e)=>this.props.saveUserEdit(e, index, this.state)} className='edit__form ' key={index}>
                  <div className='d-flex row user__row user__row--edit flex-xs-column flex-sm-row'>
                    <div className="edit" onClick={()=>this.onDeleteUser(user.id)}><img src="https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-187_floppy_save_disc-512.png" alt="floppy-img"></img></div>

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
                    <div className="edit" onClick={()=> this.onDeleteUser(user.id)}><img src="https://image.flaticon.com/icons/svg/61/61456.svg" alt="pencil-img"></img></div>
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

const mapStateToProps = state => {
  return{
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return{
    editUser: (index) => dispatch(editUser(index)),
    saveUserEdit: (e, index, stateData) => {
      e.preventDefault();
      stateData.index = index;
      dispatch(saveUser(stateData))
    },
    getUsers: (data) => dispatch(getUsers(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
