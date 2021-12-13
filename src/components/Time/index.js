import React, { useState } from "react";
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";

export default function Time({ interval, pomo, pomoCycle }) {
  const classes = useStyles();

  const [intervalTime, setIntervalTime] = useState(5);
  const [pomoTime, setPomoTime] = useState(5);

  return (
    <>
      <Typography varient="text" className={classes.text}>
        Interval Time: {interval}
      </Typography>
      <Typography varient="text" className={classes.text}>
        Pomodoro Time: {pomo}
      </Typography>
      <Typography varient="text" className={classes.text}>
        Cycle: {pomoCycle}
      </Typography>
    </>
  );
}
