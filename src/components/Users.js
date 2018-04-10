import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
//components
class Users extends Component{
  render(){
    return(
      <div className="users">
        {this.props.store.getState().userReducer.users.map((user, index) => {
          return(
            <div className="users__user" key={index}>
              <div className="users__info">
                <div className="users__info__header">
                  <div className="users__info__name"><h2>{user.name}</h2></div>
                  <div className="users__info__gender">{user.gender ? 'Male' : 'Female'}</div>
                </div>
                <div className="users__info__body">
                  <div className="users__body__info users__info__age">Age: {user.age}</div>
                  <div className="users__body__info users__info__job">Job: {user.job}</div>
                  <div className="users__body__info users__info__education">Education: {user.education}</div>
                  <div className="users__body__info users__info__kids">{user.havekids ? 'Have Kids' : 'Free'}</div>
                </div>
              </div>
            </div>
          )
        })}
        <div ><Link className="btn btn--green" to="/users/add">Add user</Link></div>
      </div>
    )
  }
}

export default Users;
