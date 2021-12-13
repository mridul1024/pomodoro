import "./App.css";
import { useState, useEffect, useRef } from "react";
import Timer from "./components/Timer/index";
import Time from "./components/Time/index";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import Cycle from "./components/Cycle/index";

function App() {
  const classes = useStyles();

  const [pomoCycle, setPomoCycle] = useState(2);
  const [currentTime, setCurrentTime] = useState(5);
  const [breakTrigger, setBreakTrigger] = useState(false);
  const [breakTime, setBreakTime] = useState(3);
  const [timer, setTimer] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const [intervalTime, setIntervalTime] = useState(3);
  const [pomoTime, setPomoTime] = useState(5);
  const [pauseStatus, setPauseStatus] = useState(false);

  const pauseState = () => {
    pauseStatus ? setPauseStatus(false) : setPauseStatus(true);
    return pauseStatus;
  };

  useEffect(() => {
    if (pauseStatus) {
      clearInterval(timer);
    } else if (!pauseStatus && currentTime > 0 && trigger) {
      const timer = setInterval(() => {
        setCurrentTime((currentTime) => currentTime - 1);
        if (currentTime === 0) {
          clearInterval(timer);
          setBreakTrigger(true);
        }
        setTimer(timer);
      }, 1000);
    } else if (!pauseStatus && breakTrigger && breakTime > 0) {
      const timer = setInterval(() => {
        setBreakTime((breakTime) => breakTime - 1);
        if (breakTime === 0) {
          clearInterval(timer);
          setBreakTrigger(false);
        }
        setTimer(timer);
      }, 1000);
    }
  }, [pauseStatus]);

  useEffect(() => {
    if (breakTrigger && trigger) {
      const timer = setInterval(() => {
        setBreakTime((breakTime) => breakTime - 1);
        if (breakTime === 0) {
          clearInterval(timer);
          setBreakTrigger(false);
        }
        setTimer(timer);
      }, 1000);
    } else if (!breakTrigger && pomoCycle >= 0 && trigger) {
      setTrigger(false);
      startPomo();
    }
  }, [breakTrigger]);

  const resetState = () => {
    setTrigger(false);
    setCurrentTime(5);
    setBreakTime(3);
    clearInterval(timer);
    setPauseStatus(false);
    setBreakTrigger(false);
    setPomoCycle(2);
  };

  const resetPomo = () => {
    setCurrentTime(5);
    setBreakTime(3);
    clearInterval(timer);
    setPauseStatus(false);
    setBreakTrigger(false);
  };

  const addCycle = () => {
    setPomoCycle((pomoCycle) => pomoCycle + 1);
  };

  const startPomo = () => {
    if (!trigger && pomoCycle >= 0 && pomoCycle > 0) {
      setTrigger(true);
      const timer = setInterval(() => {
        setCurrentTime((currentTime) => currentTime - 1);
        if (currentTime === 0) {
          clearInterval(setTimer);
          setBreakTrigger(true);
        }
        setTimer(timer);
      }, 1000);
    } else if (trigger && !breakTrigger && pomoCycle > 0) {
      setTrigger(true);
      const timer = setInterval(() => {
        setCurrentTime((currentTime) => currentTime - 1);
        if (currentTime === 0) {
          clearInterval(setTimer);
          setBreakTrigger(true);
        }
        setTimer(timer);
      }, 1000);
    }
  };

  useEffect(() => {
    if (currentTime === 0 && !breakTrigger) {
      clearInterval(timer);
      setBreakTrigger(true);
      setPomoCycle((pomoCycle) => pomoCycle - 1);
    }
  });

  useEffect(() => {
    if (breakTime === 0 && breakTrigger) {
      clearInterval(timer);
      resetPomo();
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <Typography varient="text" className={classes.header}>
          POMODORO
        </Typography>
        <Time
          interval={intervalTime}
          pomo={pomoTime}
          pomoCycle={pomoCycle}
        ></Time>
        <br />
        <Timer
          time={breakTrigger ? breakTime : currentTime}
          pause={pauseState}
          reset={resetState}
          start={startPomo}
          disable={pauseStatus}
          startTrigger={trigger}
          breakTrigger={breakTrigger}
        ></Timer>
        <br />
        <br />
        <Cycle cycle={addCycle}></Cycle>
      </header>
    </div>
  );
}

export default App;
