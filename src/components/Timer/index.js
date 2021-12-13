import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import CustomButton from "../CustomButton/index";

export default function Timer({
  time,
  start,
  pause,
  reset,
  disable,
  startTrigger,
  breakTrigger,
}) {
  const classes = useStyles();

  const [currentTime, setCurrentTime] = useState(5);
  const [pauseState, setPauseState] = useState();
  const [resetState, setResetState] = useState(false);

  const changePauseState = () => {
    //change pauseState value
    console.log("paused button clicked");
  };

  const changeResetState = () => {
    //set reset state
    console.log("reset button clicked");
  };

  return (
    <>
      <div className={classes.timerContainer}>
        <Typography varient="text" className={classes.text}>
          {pauseState}
        </Typography>
        <Typography varient="text" className={classes.text}>
          {breakTrigger ? `break-time : ${time}` : `current-time : ${time}`}
        </Typography>
        <div className={classes.buttonContainer}>
          <CustomButton
            text="start"
            onclick={start}
            disableStatus={startTrigger}
          />
          <CustomButton text={disable ? "unpause" : "pause"} onclick={pause} />
          <CustomButton text="reset" onclick={reset} />
        </div>
      </div>
    </>
  );
}
