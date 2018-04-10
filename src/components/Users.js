import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
//components
class Users extends Component{
  render(){
    return(
      <div className="users">
        {this.props.store.getState().userReducer.users.map((user, index) => {
          return(
            <div className="user" key={index}>
              <div className="user__info">
                <div className="user__info__img"></div>

                <div className='user__body'>

                  <div className="user__body__header">
                    <div className="user__body__header__name"><h2>{user.name}</h2></div>
                    <div className="user__body__header__gender">{user.gender ? 'Male' : 'Female'}</div>
                  </div>

                  <div className="user__body__main">
                    <div className="user__body__info user__info__age">Age: {user.age}</div>
                    <div className="user__body__info user__info__job">Job: {user.job}</div>
                    <div className="user__body__info user__info__education">Education: {user.education}</div>
                    <div className="user__body__info user__info__kids">{user.havekids ? 'Have Kids' : 'Free'}</div>
                  </div>

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
