import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
      <footer className="Footer">
        Made with<span role="img" aria-label="heart"> ❤️️</span> © {new Date().getFullYear()}.
      </footer>
    )
  }
}

export default Footer;