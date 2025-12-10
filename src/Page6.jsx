import { useState } from "react";
import "./components/Page6.css"; 
function Calculator({ title }) {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(value + e.target.innerText);
  };

  const clear = () => {
    setValue("");
  };

  const calculate = () => {
    try {
      setValue(eval(value));
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>{title}</h2>

      <input className="display" type="text" value={value} readOnly />

      <div className="buttons">
        <button className="clear" onClick={clear}>C</button>
        <button onClick={handleClick}>/</button>
        <button onClick={handleClick}>*</button>
        <button onClick={handleClick}>-</button>

        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>+</button>

        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>

        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>

        <button className="zero" onClick={handleClick}>0</button>
        <button onClick={handleClick}>.</button>
        <button className="equal" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
