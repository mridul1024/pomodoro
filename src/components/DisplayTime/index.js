import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export default function DisplayTime({ time }) {
  const classes = useStyles();
  return (
    <>
      <Typography varient="text" className={classes.text}>
        {time}
      </Typography>
    </>
  );
}
