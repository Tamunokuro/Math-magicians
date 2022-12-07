import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, buttonChange] = useState({
    total: 0,
    operation: null,
    next: null,
  });

  function handleButtonChange(e) {
    const btnVal = e.target.name;
    return buttonChange((obj) => calculate(obj, btnVal));
  }

  return (
    <Container>
      <section className="calculator-section">
        <Row className="justify-content-center">
          <Col xs={6}>
            <p>Let&apos;s do some Maths!</p>
          </Col>
          <Col xs={6}>
            <div className="calculator">
              <span className="results">
                {obj.total}
                {' '}
                {obj.operation}
                {' '}
                {obj.next}
              </span>

              <button type="button" className="numbers" name="AC" onClick={handleButtonChange}>AC</button>
              <button type="button" className="numbers" name="+/-" onClick={handleButtonChange}>+/-</button>
              <button type="button" className="numbers" name="%" onClick={handleButtonChange}>%</button>
              <button type="button" className="operators" name="&divide;" onClick={handleButtonChange}>&divide;</button>
              <button type="button" className="numbers" name="7" onClick={handleButtonChange}>7</button>
              <button type="button" className="numbers" name="8" onClick={handleButtonChange}>8</button>
              <button type="button" className="numbers" name="9" onClick={handleButtonChange}>9</button>
              <button type="button" className="operators" name="x" onClick={handleButtonChange}>x</button>
              <button type="button" className="numbers" name="4" onClick={handleButtonChange}>4</button>
              <button type="button" className="numbers" name="5" onClick={handleButtonChange}>5</button>
              <button type="button" className="numbers" name="6" onClick={handleButtonChange}>6</button>
              <button type="button" className="operators" name="-" onClick={handleButtonChange}>-</button>
              <button type="button" className="numbers" name="1" onClick={handleButtonChange}>1</button>
              <button type="button" className="numbers" name="2" onClick={handleButtonChange}>2</button>
              <button type="button" className="numbers" name="3" onClick={handleButtonChange}>3</button>
              <button type="button" className="operators" name="+" onClick={handleButtonChange}>+</button>
              <button type="button" className="numbers span-zero" name="0" onClick={handleButtonChange}>0</button>
              <button type="button" className="numbers" name="." onClick={handleButtonChange}>.</button>
              <button type="button" className="operators" name="=" onClick={handleButtonChange}>=</button>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Calculator;
