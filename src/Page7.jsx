import { useState } from "react";


function Converter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsius = (e) => {
    const c = e.target.value;
    setCelsius(c);
    setFahrenheit(c ? ((c * 9) / 5 + 32).toFixed(2) : "");
  };

  const handleFahrenheit = (e) => {
    const f = e.target.value;
    setFahrenheit(f);
    setCelsius(f ? (((f - 32) * 5) / 9).toFixed(2) : "");
  };

  return (
    <div className="converter">
      <h2>Temperature Converter</h2>

      <div className="field">
        <label>Celsius (°C)</label>
        <input type="number" value={celsius} onChange={handleCelsius} />
      </div>

      <div className="field">
        <label>Fahrenheit (°F)</label>
        <input type="number" value={fahrenheit} onChange={handleFahrenheit} />
      </div>
    </div>
  );
}

export default Converter;
