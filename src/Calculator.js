import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        <button className="btnName" onClick={() => handleButtonClick('1')}>1</button>
        <button className="btnName" onClick={() => handleButtonClick('2')}>2</button>
        <button className="btnName" onClick={() => handleButtonClick('3')}>3</button>
        <button className="btnName" onClick={() => handleButtonClick('4')}>4</button>
        <button className="btnName" onClick={() => handleButtonClick('5')}>5</button>
        <button className="btnName" onClick={() => handleButtonClick('6')}>6</button>
        <button className="btnName" onClick={() => handleButtonClick('7')}>7</button>
        <button className="btnName" onClick={() => handleButtonClick('8')}>8</button>
        <button className="btnName" onClick={() => handleButtonClick('9')}>9</button>
        <button className="btnName" onClick={() => handleButtonClick('0')}>0</button>
        <button className="btnName" onClick={() => handleButtonClick('+')}>+</button>
        <button className="btnName" onClick={() => handleButtonClick('-')}>-</button>
        <button className="btnName" onClick={() => handleButtonClick('*')}>*</button>
        <button className="btnName" onClick={() => handleButtonClick('/')}>/</button>
        <button className="btnName" onClick={handleClear}>C</button>
        <button className="btnName" onClick={handleCalculate}>=</button>
      </div>
      
    </div>
  );
}

export default Calculator;