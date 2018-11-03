import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
class Header extends Component {
  render(){
    return(
        <div className="header text-center">
          <NavLink exact to="/" className="header__link text-center">Home</NavLink>
          <NavLink to="/users" className="header__link text-center">Users</NavLink>
          <NavLink to="/gallery" className="header__link text-center">Gallery</NavLink>
          <NavLink to="/company" className="header__link text-center">Company</NavLink>
        </div>
    )
  }
}

export default Header;
