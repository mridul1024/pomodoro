import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  // header: {
  //   fontSize: "18px",
  //   textTransform: "uppercase",
  //   fontWeight: "bold",
  // },
  button: {
    background: "white",
    color: "black",
    marginBottom: "10px",
    "&:hover": {
      transform: "scale(1.1)",
      background: "black",
      color: "white",
      border: "1px solid white",
      transition: "all 0.4s ease-out",
    },
  },
  cycleNumber: {
    fontSize: "34px",
    fontWeight: "bold",
  },
});
