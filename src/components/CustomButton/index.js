import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";

export default function CustomButton({ text, onclick, disableStatus }) {
  const classes = useStyles();

  return (
    <>
      <Button
        varient="contained"
        onClick={onclick}
        className={classes.button}
        disabled={disableStatus}
      >
        {text}
      </Button>
    </>
  );
}
