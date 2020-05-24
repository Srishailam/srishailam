import React, { Component } from 'react';
import './Main.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
      <div className="Main">
        {this.props.children}
      </div>
    )
  }
}

export default Main;