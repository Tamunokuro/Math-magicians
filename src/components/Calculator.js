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
    const btnVal = e.target.innerText;
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
              <span data-testid="screen" className="results">
                {obj.total}
                {obj.operation}
                {obj.next}
              </span>

              <button type="button" className="numbers" data-testid="AC" onClick={handleButtonChange}>AC</button>
              <button type="button" className="numbers" data-testid="+/-" onClick={handleButtonChange}>+/-</button>
              <button type="button" className="numbers" data-testid="%" onClick={handleButtonChange}>%</button>
              <button type="button" className="operators" data-testid="&divide;" onClick={handleButtonChange}>&divide;</button>
              <button type="button" className="numbers" data-testid="7" onClick={handleButtonChange}>7</button>
              <button type="button" className="numbers" data-testid="8" onClick={handleButtonChange}>8</button>
              <button type="button" className="numbers" data-testid="9" onClick={handleButtonChange}>9</button>
              <button type="button" className="operators" data-testid="x" onClick={handleButtonChange}>x</button>
              <button type="button" className="numbers" data-testid="4" onClick={handleButtonChange}>4</button>
              <button type="button" className="numbers" data-testid="5" onClick={handleButtonChange}>5</button>
              <button type="button" className="numbers" data-testid="6" onClick={handleButtonChange}>6</button>
              <button type="button" className="operators" data-testid="-" onClick={handleButtonChange}>-</button>
              <button type="button" className="numbers" data-testid="1" onClick={handleButtonChange}>1</button>
              <button type="button" className="numbers" data-testid="2" onClick={handleButtonChange}>2</button>
              <button type="button" className="numbers" data-testid="3" onClick={handleButtonChange}>3</button>
              <button type="button" className="operators" data-testid="+" onClick={handleButtonChange}>+</button>
              <button type="button" className="numbers span-zero" data-testid="0" onClick={handleButtonChange}>0</button>
              <button type="button" className="numbers" data-testid="." onClick={handleButtonChange}>.</button>
              <button type="button" className="operators" data-testid="=" onClick={handleButtonChange}>=</button>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Calculator;
