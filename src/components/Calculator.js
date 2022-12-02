import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleButttonChange = this.handleButtonChange.bind(this);
  }

  handleButtonChange = (e) => {
    const btnVal = e.target.name;
    this.setState((obj) => calculate(obj, btnVal));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <section className="calculator-section">
        <div className="calculator">
          <span className="results">
            {' '}
            {total}
            {' '}
            {operation}
            {' '}
            {next}
            {' '}
          </span>
          <button type="button" className="numbers" name="AC" onClick={this.handleButtonChange}>AC</button>
          <button type="button" className="numbers" name="+/-" onClick={this.handleButtonChange}>+/-</button>
          <button type="button" className="numbers" name="%" onClick={this.handleButtonChange}>%</button>
          <button type="button" className="operators" name="&divide;" onClick={this.handleButtonChange}>&divide;</button>
          <button type="button" className="numbers" name="7" onClick={this.handleButtonChange}>7</button>
          <button type="button" className="numbers" name="8" onClick={this.handleButtonChange}>8</button>
          <button type="button" className="numbers" name="9" onClick={this.handleButtonChange}>9</button>
          <button type="button" className="operators" name="x" onClick={this.handleButtonChange}>x</button>
          <button type="button" className="numbers" name="4" onClick={this.handleButtonChange}>4</button>
          <button type="button" className="numbers" name="5" onClick={this.handleButtonChange}>5</button>
          <button type="button" className="numbers" name="6" onClick={this.handleButtonChange}>6</button>
          <button type="button" className="operators" name="-" onClick={this.handleButtonChange}>-</button>
          <button type="button" className="numbers" name="1" onClick={this.handleButtonChange}>1</button>
          <button type="button" className="numbers" name="2" onClick={this.handleButtonChange}>2</button>
          <button type="button" className="numbers" name="3" onClick={this.handleButtonChange}>3</button>
          <button type="button" className="operators" name="+" onClick={this.handleButtonChange}>+</button>
          <button type="button" className="numbers span-zero" name="0" onClick={this.handleButtonChange}>0</button>
          <button type="button" className="numbers" name="." onClick={this.handleButtonChange}>.</button>
          <button type="button" className="operators" name="=" onClick={this.handleButtonChange}>=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
