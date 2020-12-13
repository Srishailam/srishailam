import React, { Component } from 'react';
import logo from './../../logo.svg';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
      <header className="NavBar">
        <nav className="NavBar_navigation">
          <NavLink to="/home" className=""><img src={logo} className="NavBar_logo" alt="Logo" /></NavLink>
          <div className="navigation-sub">
            <NavLink to="/projects" className="item" activeClassName="active">Projects</NavLink>
            <NavLink to="/articles" className="item" activeClassName="active">Articles</NavLink>
            <NavLink to="/about-me" className="item" activeClassName="active">About Me</NavLink>
            <NavLink to="/home"     className="item" activeClassName="active">Home</NavLink>
          </div>
        </nav>
      </header>
    )
  }
}

export default NavBar;