import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
class Header extends Component {
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
