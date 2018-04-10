import React, {Component} from 'react';
import {Route} from 'react-router-dom';

//components
import Add_user from './Add_user'
class Users extends Component{
  render(){
    return(
      <div className="users">
        <div className="users__user">
          <div className="users__info">
            <div className="users__info__header">
              <div className="users__info__name"><h2>Ivanov Ivan</h2></div>
              <div className="users__info__gender">Male</div>
            </div>
            <div className="users__info__body">
              <div className="users__body__info users__info__age">Age: 32</div>
              <div className="users__body__info users__info__job">Job: High School</div>
              <div className="users__body__info users__info__education">Education: Painter</div>
              <div className="users__body__info users__info__kids">Have kids</div>
            </div>
          </div>
        </div>
        <div className="btn btn--green">Add user</div>
      </div>
    )
  }
}

export default Users;
