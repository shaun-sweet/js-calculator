import React, { Component } from 'react';
import './css/DisplayWindow.css';

class DisplayWindow extends Component {

  render() {
    return (
      <div className="display-window">
        <div className="display-content">
          {this.props.value}
        </div>
      </div>
    )
  }
}

export default DisplayWindow;
