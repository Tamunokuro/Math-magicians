import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
  }

  render() {
    const { total } = this.state;
    return (
      <section className="calculator-section">
        <div className="calculator">
          <span className="results">
            {' '}
            {total}
            {' '}
          </span>
          <button type="button" className="numbers">AC</button>
          <button type="button" className="numbers">+/-</button>
          <button type="button" className="numbers">%</button>
          <button type="button" className="operators">&divide;</button>
          <button type="button" className="numbers">7</button>
          <button type="button" className="numbers">8</button>
          <button type="button" className="numbers">9</button>
          <button type="button" className="operators">&times;</button>
          <button type="button" className="numbers">4</button>
          <button type="button" className="numbers">5</button>
          <button type="button" className="numbers">6</button>
          <button type="button" className="operators">-</button>
          <button type="button" className="numbers">1</button>
          <button type="button" className="numbers">2</button>
          <button type="button" className="numbers">3</button>
          <button type="button" className="operators">+</button>
          <button type="button" className="numbers span-zero">0</button>
          <button type="button" className="numbers">.</button>
          <button type="button" className="operators">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
