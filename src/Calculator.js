import React, { Component } from 'react';
import './css/Calc.css';
import DisplayWindow from './DisplayWindow';
import Button from './Button';
import _ from 'underscore';
class Calculator extends Component {

  constructor() {
    super();
    this.state = {
      expression: "",
      valueOnDisplay: "0",
      displayFontSize: ""
    };
    this.handlePress = this.handlePress.bind(this);
    this.evalExpression = this.evalExpression.bind(this);
    this.clearExpression = this.clearExpression.bind(this);
    this.handleNegative = this.handleNegative.bind(this);
  }

  handleNegative() {
    console.error("no support for this yet ^_^");

  }

  evalExpression() {
    this.setState({
      valueOnDisplay: eval(this.state.expression)
    });
  }

  clearExpression() {
    this.setState({
      displayFontSize: "60",
      expression: '',
      valueOnDisplay: '0'
    });
  }

  handlePress(input) {
    let newState = this.state.expression + input;
    this.setState({
      valueOnDisplay: newState,
      expression: newState
    });
    if (this.state.expression.length > 8) {
      this.setState({
        displayFontSize: "47"
      })
    }
    if (this.state.expression.length > 10) {
      this.setState({
        displayFontSize: "40"
      })
    }
    if (this.state.expression.length > 12) {
      this.setState({
        displayFontSize: "30"
      })
    }
    if (this.state.expression.length > 16) {
      this.setState({
        displayFontSize: "15"
      })
    }
  }

  render() {
    return (
      <div className="App">
        <DisplayWindow
          fontSize={this.state.displayFontSize}
          value={this.state.valueOnDisplay}
        />
        <div className="row">
          <Button onPress={this.clearExpression} id='accent-grey' value='AC' />
          <Button onPress={this.handleNegative} id='accent-grey' value='+/-' />
          <Button onPress={this.handlePress} id='accent-grey' value='%' />
          <Button onPress={this.handlePress} value='/' />
        </div>
        <div className="row">
          <Button onPress={this.handlePress} value='7' />
          <Button onPress={this.handlePress} value='8' />
          <Button onPress={this.handlePress} value='9' />
          <Button onPress={this.handlePress} value='*' />
        </div>
        <div className="row">
          <Button onPress={this.handlePress} value='4' />
          <Button onPress={this.handlePress} value='5' />
          <Button onPress={this.handlePress} value='6' />
          <Button onPress={this.handlePress} value='-' />
        </div>
        <div className="row">
          <Button onPress={this.handlePress} value='1' />
          <Button onPress={this.handlePress} value='2' />
          <Button onPress={this.handlePress} value='3' />
          <Button onPress={this.handlePress} value='+' />
        </div>
        <div className="row">
          <Button onPress={this.handlePress} id='zero-btn' value='0' />
          <Button onPress={this.handlePress} value='.' />
          <Button onPress={this.evalExpression} value='=' />
        </div>
      </div>
    );
  }
}

export default Calculator;
