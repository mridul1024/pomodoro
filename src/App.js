import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/Header/index";
import DisplayTime from "./components/DisplayTime/index";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Typography } from "@material-ui/core";
import beepSound from "./sounds/beepsound.mp3";

function App() {
  const classes = useStyles();
  var beep = new Audio(beepSound);

  const SECOND = 5; // * 60;
  const BREAK_SECOND = 3; // * 60;

  const [cycle, setCycle] = useState(1);
  const [pause, setPause] = useState(true);
  const [sessionBreak, setSessionBreak] = useState(false);
  const [seconds, setSeconds] = useState(SECOND);

  //format function
  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    console.log(`minutes: ${minutes} seconds : ${seconds}`);
    return `${minutes < 10 ? "0" + minutes : minutes} : ${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  useEffect(() => {
    if (!pause && cycle >= 0) {
      let timer = setInterval(() => {
        setSeconds((prev) => {
          prev = prev - 1;
          if (prev < 0 && !sessionBreak) {
            clearInterval(localStorage.getItem("timer"));
            // setCycle((prev) => prev - 1);
            beep.play();
            if (cycle !== 0) {
              setCycle((prev) => prev - 1);
            }
            setSessionBreak(!sessionBreak);
            return BREAK_SECOND;
          } else if (prev < 0 && sessionBreak) {
            beep.play();
            if (cycle === 0) {
              setSeconds(SECOND);
              setPause(true);
              setSessionBreak(false);
              return clearInterval(localStorage.getItem("timer", timer));
            }
            clearInterval(localStorage.getItem("timer"));
            setSessionBreak(!sessionBreak);
            return SECOND;
          }
          return prev;
        });
        localStorage.clear();
        localStorage.setItem("timer", timer);
      }, 1000);
    } else if (pause) {
      clearInterval(localStorage.getItem("timer"));
    }
  }, [pause, sessionBreak]);

  const addCycle = () => {
    setCycle((prev) => prev + 1);
  };

  const removeCycle = () => {
    if (cycle !== 0) {
      setCycle((prev) => prev - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header text={sessionBreak ? "Have a break :)" : "Work!"} />
        <DisplayTime time={formatTime(seconds)} />
        <Button
          varient="outlined"
          className={classes.button}
          onClick={() => setPause(!pause)}
        >
          {pause ? "START" : "PAUSE"}
        </Button>
        <br />
        <Button
          varient="outlined"
          className={classes.button}
          onClick={() => addCycle()}
        >
          ADD CYCLE
        </Button>
        <Button
          varient="outlined"
          className={classes.button}
          onClick={() => removeCycle()}
        >
          REMOVE CYCLE
        </Button>
        <br />
        <ArrowDownOutlined />
        <br />
        <Typography type="text" className={classes.cycleNumber}>
          {cycle}
        </Typography>
      </header>
    </div>
  );
}

export default App;
