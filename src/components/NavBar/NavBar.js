import React, { Component } from 'react';
import logo from './../../logo.svg';
import { Link } from 'react-router-dom';

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
          <Link to="/projects" className=""><img src={logo} className="NavBar_logo" alt="Logo" /></Link>
          <div className="navigation-sub">
            <Link to="/projects" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about-me" className="item">About Me</Link>
          </div>
        </nav>
      </header>
    )
  }
}

export default NavBar;