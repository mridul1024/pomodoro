import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export default function Header({ text }) {
  const classes = useStyles();
  return (
    <>
      <Typography type="text" className={classes.text}>
        {text}
      </Typography>
    </>
  );
}
