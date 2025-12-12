import { useEffect, useState } from "react";

function DigitalClockTimer({ title }) {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

 
  const formattedTime = time.toLocaleTimeString();

 
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  const resetTimer = () => setSeconds(0);

  return (
    <div style={styles.container}>
      <h2>{title}</h2>

    
      <div style={styles.clockBox}>
        <h1>{formattedTime}</h1>
      </div>

     
      <div style={styles.timerBox}>
        <h2>Timer: {seconds}s</h2>
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    border: "2px solid black",
    width: "350px",
    margin: "auto",
    marginTop: "40px",
    borderRadius: "10px",
  },
  clockBox: {
    marginBottom: "20px",
  },
  timerBox: {
    marginTop: "10px",
  },
};

export default DigitalClockTimer;
