import React, { Component } from 'react';
import './css/Calc.css';
import DisplayWindow from './DisplayWindow';
import Button from './Button';
class Calculator extends Component {

  constructor() {
    super();
    this.state = {
      valueOnDisplay: "23121231"
    };
  }

  render() {
    return (
      <div className="App">
        <DisplayWindow
          value={this.state.valueOnDisplay}
        />
        <div className="row">
          <Button value='AC' />
          <Button value='+/-' />
          <Button value='%' />
          <Button value='/' />
        </div>
        <div className="row">
          <Button value='7' />
          <Button value='8' />
          <Button value='9' />
          <Button value='X' />
        </div>
        <div className="row">
          <Button value='4' />
          <Button value='5' />
          <Button value='6' />
          <Button value='-' />
        </div>
        <div className="row">
          <Button value='1' />
          <Button value='2' />
          <Button value='3' />
          <Button value='+' />
        </div>
        <div className="row">
          <Button value='0' />
          <Button value='.' />
          <Button id='equals-btn' value='=' />
        </div>
      </div>
    );
  }
}

export default Calculator;
