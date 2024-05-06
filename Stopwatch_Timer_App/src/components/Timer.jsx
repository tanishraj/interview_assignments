import React, { useEffect, useState } from 'react';

const SECONDS = 5;

export const Timer = () => {
  const [second, setSecond] = useState(SECONDS);
  const [isStarted, setIsStarted] = useState(false);
  var interval = null;

  useEffect(() => {
    if (isStarted) {
      interval = setInterval(() => {
        setSecond((second) => {
          if (second === 0) {
            setIsStarted(false);
            return 0;
          }
          return second - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isStarted]);

  const startHandler = () => {
    setIsStarted(true);
  };

  const pauseHandler = () => {
    setIsStarted(false);
  };

  const resetHandler = () => {
    setSecond(SECONDS);
    setIsStarted(false);
  };

  return (
    <div>
      <h1>TIMER APP</h1>

      {isStarted.toString()}

      <div className="timer-container">
        <h2
          className="stopwatch"
          style={{ color: isStarted ? 'green' : 'red' }}
        >
          <span>
            {Math.floor(second / 60) < 10
              ? '0' + Math.floor(second / 60)
              : Math.floor(second / 60)}
          </span>
          :
          <span>
            {Math.floor(second % 60) < 10
              ? '0' + Math.floor(second % 60)
              : Math.floor(second % 60)}
          </span>
        </h2>
      </div>

      <div className="button-cotnainer">
        <button onClick={startHandler}>Start</button>
        <button onClick={pauseHandler}>Pause</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
};
