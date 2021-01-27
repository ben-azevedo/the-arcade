import { useState, useEffect } from "react";

function Timer(props) {
  const { time, setTime, gameOver, chooseNewDifficulty, winner} = props;
  const [timeInterval, setTimeInterval] = useState("");

  useEffect(() => {
    if (!gameOver) {
      setTimeInterval(setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000));
    }
    return () => clearInterval(timeInterval);
  }, [gameOver]);
  
  useEffect(() => {
    if (!winner) {
      setTime(0);
    }
    clearInterval(timeInterval);
  }, [winner, gameOver, chooseNewDifficulty])

  return (
    <div>⏰ {time}</div>
  )
}

export default Timer;