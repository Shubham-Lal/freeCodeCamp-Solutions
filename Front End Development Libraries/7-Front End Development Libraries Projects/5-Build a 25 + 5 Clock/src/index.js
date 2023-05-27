import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [play, setPlay] = useState(false);
  const [timingType, setTimingType] = useState('SESSION');
  const [timeLeft, setTimeLeft] = useState(1500);

  const handleBreakIncrease = () => {
    if (breakLength < 60) {
      setBreakLength(prev => prev + 1);
    }
  };

  const handleBreakDecrease = () => {
    if (breakLength > 1) {
      setBreakLength(prev => prev - 1);
    }
  };

  const handleSessionIncrease = () => {
    if (sessionLength < 60) {
      setSessionLength(prev => prev + 1);
      if (!play) {
        setTimeLeft(prev => prev + 60);
      }
    }
  };

  const handleSessionDecrease = () => {
    if (sessionLength > 1) {
      const newSessionLength = sessionLength - 1;
      setSessionLength(newSessionLength);
      if (!play) {
        if (timeLeft >= 60) {
          setTimeLeft(prev => prev - 60);
        } else {
          setTimeLeft(newSessionLength * 60);
        }
      }
    }
  };

  const handlePlay = () => {
    setPlay(prev => !prev);
  };

  const handleReset = () => {
    setPlay(false);
    setTimeLeft(1500);
    setBreakLength(5);
    setSessionLength(25);
    setTimingType('SESSION');
    const audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
  };

  const resetTimer = () => {
    const audio = document.getElementById("beep");
    if (!timeLeft && timingType === "SESSION") {
      setTimeLeft(breakLength * 60)
      setTimingType("BREAK")
      audio.play()
    }
    if (!timeLeft && timingType === "BREAK") {
      setTimeLeft(sessionLength * 60)
      setTimingType("SESSION")
      audio.pause()
      audio.currentTime = 0;
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timeLeft && play) {
        setTimeLeft(prev => prev - 1);
      } else if (timeLeft === 0) {
        resetTimer();
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [play, timeLeft, resetTimer]);

  const title = timingType === 'SESSION' ? 'Session' : 'Break';

  const timeFormatter = () => {
    if (timeLeft < 0) {
      setTimeLeft(0);
      return '00:00';
    }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <>
      <div className="wrapper">
        <h2 className="clock">25+5 Clock</h2>
        <div className="break-session-length">
          <div className="label-container">
            <h3 id="break-label">Break Length</h3>
            <div className="label">
              <button
                id="break-increment"
                style={play ? { cursor: 'not-allowed', backgroundColor: '#fff', color: '#1b1b32' } : null}
                disabled={play}
                onClick={handleBreakIncrease}
              >
                Increase
              </button>
              <strong id="break-length">{breakLength}</strong>
              <button
                id="break-decrement"
                style={play ? { cursor: 'not-allowed', backgroundColor: '#fff', color: '#1b1b32' } : null}
                disabled={play}
                onClick={handleBreakDecrease}
              >
                Decrease
              </button>
            </div>
          </div>
          <div className="label-container">
            <h3 id="session-label">Session Length</h3>
            <div className="label">
              <button
                id="session-increment"
                style={play ? { cursor: 'not-allowed', backgroundColor: '#fff', color: '#1b1b32' } : null}
                disabled={play}
                onClick={handleSessionIncrease}
              >
                Increase
              </button>
              <strong id="session-length">{sessionLength}</strong>
              <button
                id="session-decrement"
                style={play ? { cursor: 'not-allowed', backgroundColor: '#fff', color: '#1b1b32' } : null}
                disabled={play}
                onClick={handleSessionDecrease}
              >
                Decrease
              </button>
            </div>
          </div>
        </div>
        <div className="timer-wrapper">
          <div className="timer">
            <h2 id="timer-label">{title}</h2>
            <h3 id="time-left">{timeFormatter()}</h3>
          </div>
          <div className="action">
            <button
              id="start_stop"
              style={play ? { backgroundColor: 'orange' } : null}
              onClick={handlePlay}
            >
              {play ? 'Stop' : 'Start'}
            </button>
            <button id="reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <audio id="beep" preload="auto" src="/beepSound.wav" />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <App />
);