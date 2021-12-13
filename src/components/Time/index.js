import React, { useState } from "react";
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";

export default function Time() {
  const classes = useStyles();

  const [intervalTime, setIntervalTime] = useState(5);
  const [pomoTime, setPomoTime] = useState(5);

  return (
    <>
      <Typography varient="text" className={classes.text}>
        Interval Time: {intervalTime}
      </Typography>
      <Typography varient="text" className={classes.text}>
        Pomodoro Time: {pomoTime}
      </Typography>
    </>
  );
}
