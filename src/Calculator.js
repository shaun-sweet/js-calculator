import React, { Component } from 'react';
import './css/Calc.css';
import DisplayWindow from './DisplayWindow';
import Button from './Button';
class Calculator extends Component {

  constructor() {
    super();
    this.state = {
      expression: "",
      valueOnDisplay: "0"
    };
    this.handlePress = this.handlePress.bind(this);
    this.evalExpression = this.evalExpression.bind(this);
    this.clearExpression = this.clearExpression.bind(this);
  }

  evalExpression() {
    this.setState({
      valueOnDisplay: eval(this.state.expression)
    });
  }

  clearExpression() {
    this.setState({
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
  }

  render() {
    return (
      <div className="App">
        <DisplayWindow
          value={this.state.valueOnDisplay}
        />
        <div className="row">
          <Button onPress={this.clearExpression} id='accent-grey' value='AC' />
          <Button onPress={this.handlePress} id='accent-grey' value='+/-' />
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
