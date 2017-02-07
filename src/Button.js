import './css/Button.css';
import React, { Component } from 'react';

class Button extends Component {

  render() {
    let id = '';
    if (this.props.id) {
      id = this.props.id;
    }
    return (
      <div id={id} onKeyPress={this.log} className="button">
         { this.props.value }
      </div>
    );
  }
}

export default Button;
