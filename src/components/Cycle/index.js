import React, { useState } from "react";
import { useStyles } from "./styles";
import CustomButton from "../CustomButton";

export default function Cycle({ cycle }) {
  const classes = useStyles();

  const [cycleState, setCycleState] = useState(false);

  const changeCycleState = () => {
    //change cycle state here
    console.log("add cycle button clicked");
  };

  const addCycle = () => {};

  return (
    <>
      <div className={classes.cycleContainer}>
        <CustomButton text="add cycle" onclick={cycle}></CustomButton>
      </div>
    </>
  );
}
