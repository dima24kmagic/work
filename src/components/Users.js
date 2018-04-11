import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {editUser} from '../action/actions'
//components



// console.log(pic1);

class Users extends Component{
  testEdit = (index) => {
    this.props.store.dispatch(editUser(index));
    console.log(this.props.store.getState(), index);
  }
  render(){
    return(
        <div className="users">
          {this.props.store.getState().userReducer.users.map((user, index) => {
            if(user.isEditing){
              return(
                  <form className='edit__form ' key={index} >
                  <div className='d-flex row user__row user__row--edit flex-xs-column flex-sm-row'>
                    <div className="edit" onClick={()=>this.testEdit(index)}>Save</div>

                    <div className='col-12 photo photo--edit col-sm-4'>
                      <input type='file'/>
                      <img src={user.pic}></img>
                    </div>
                    <div className='col-12 col-sm-8 '>
                      <div className='row'>
                        <div className='d-flex col-12 name name--edit justify-content-center justify-content-sm-start'><input type='text' maxLength="40" placeholder={user.name}/>
                          <span>{user.gender == true ? 'Male' : 'Female'}</span>
                        </div>
                        <div className='col-12 lead info'>
                          <p>Age: <input type='number' maxLength="20" placeholder={user.age}/> <br/>
                          Education: <input type='text' maxLength="20" placeholder={user.education}/> <br/>
                        Job: <input type='text' maxLength="20" placeholder={user.job}/></p></div>

                      </div>
                    </div>
                  </div>
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
                        <div className='col-8 lead info'><p>Age: {user.age} <br/>Education: {user.education} <br/>Job: {user.job}</p></div>
                        <div className='col-4 lead info'><p>TEXT <br/>TEXT <br/>TEXT</p></div>
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
