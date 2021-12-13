import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  button: {
    textTransform: "uppercase",
    color: "black",
    background: "white",
    borderRadius: "6px",
    margin: "2px 2px",
    "&:hover": {
      background: "black",
      border: "1px solid white",
      color: "white",
    },
  },
});
