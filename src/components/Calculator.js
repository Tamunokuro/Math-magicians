import React, { useState } from 'react';

const Calculator = () => {
  const [state] = useState({ total: 0 });
  const { total } = state;

  return (
    <section className="calculator-section">
      <div className="calculator">
        <span className="results">
          {' '}
          {total}
          {' '}
        </span>
        <button type="button" className="operators">AC</button>
        <button type="button" className="operators">+/-</button>
        <button type="button" className="operators">%</button>
        <button type="button" className="operators">/</button>
        <button type="button" className="numbers">0</button>
        <button type="button" className="numbers">7</button>
        <button type="button" className="numbers">8</button>
        <button type="button" className="numbers">9</button>
        <button type="button" className="numbers">x</button>
        <button type="button" className="numbers">4</button>
        <button type="button" className="numbers">5</button>
        <button type="button" className="numbers">6</button>
        <button type="button" className="operators">-</button>
        <button type="button" className="numbers">1</button>
        <button type="button" className="numbers">2</button>
        <button type="button" className="numbers">3</button>
        <button type="button" className="operators">+</button>
        <button type="button" className="numbers">0</button>
        <button type="button" className="operators">.</button>
        <button type="button" className="operators">=</button>
      </div>
    </section>
  );
};

export default Calculator;
