import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {switchPage} from '../action/actions';
class Header extends Component {
  test = (e) => {
    e.preventDefault();
    console.log(111);
    this.props.store.dispatch({type: "SWITCH_PAGE", page: "/contacts"})
  }
  render(){
    return(
        <div className="header">
          <NavLink exact to="/" className="header__link">Home</NavLink>
          <NavLink to="/users" className="header__link">Users</NavLink>
          <NavLink to="/company" className="header__link">Company</NavLink>
        </div>
    )
  }
}

export default Header;
