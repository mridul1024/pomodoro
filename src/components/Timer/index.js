import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import CustomButton from "../CustomButton/index";

export default function Timer() {
  const classes = useStyles();

  const [currentTime, setCurrentTime] = useState();

  return (
    <>
      <div className={classes.timerContainer}>
        <Typography varient="text" className={classes.text}>
          current time: {currentTime}
        </Typography>
        <CustomButton text="pause" onclick="" />
        <CustomButton text="reset" onclick="" />
      </div>
    </>
  );
}
