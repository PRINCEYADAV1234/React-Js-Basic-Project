import React, { useState } from 'react'
import './App.css'
export default function App() {
  const [input, setInput] = useState("");
  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "CE"){
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div>
      <h2>Calculator using react js</h2>
      <div className="container">
        <input type="text" value={input} id="input" disabled />
        <div className="buttons_row1">
          <div className="number_7" onClick={() => handleButtonClick("%")}>%</div>
          <div className="number_7" onClick={() => handleButtonClick("CE")}>CE</div>
          <div className="number_7" onClick={() => handleButtonClick("C")}>C</div>
          <div className="number_7" onClick={() => handleButtonClick("/")}>/</div>
        </div>

        <div className="buttons_row2">
          <div className="number_7" onClick={() => handleButtonClick("7")}>7</div>
          <div className="number_7" onClick={() => handleButtonClick("8")}>8</div>
          <div className="number_7" onClick={() => handleButtonClick("9")}>9</div>
          <div className="number_7" onClick={() => handleButtonClick("*")}>*</div>
        </div>

        <div className="buttons_row3">
          <div className="number_7" onClick={() => handleButtonClick("4")}>4</div>
          <div className="number_7" onClick={() => handleButtonClick("5")}>5</div>
          <div className="number_7" onClick={() => handleButtonClick("6")}>6</div>
          <div className="number_7" onClick={() => handleButtonClick("-")}>-</div>
        </div>

        <div className="buttons_row4">
          <div className="number_7" onClick={() => handleButtonClick("1")}>1</div>
          <div className="number_7" onClick={() => handleButtonClick("2")}>2</div>
          <div className="number_7" onClick={() => handleButtonClick("3")}>3</div>
          <div className="number_7" onClick={() => handleButtonClick("+")}>+</div>
        </div>

        <div className="buttons_row5">
          <div className="number_7" onClick={() => handleButtonClick("0")}>0</div>
          <div className="number_7" onClick={() => handleButtonClick("00")}>00</div>
          <div className="number_7" onClick={() => handleButtonClick(".")}>.</div>
          <div className="number_7" onClick={() => handleButtonClick("=")}>=</div>
        </div>
      </div>
    </div>
  )
}