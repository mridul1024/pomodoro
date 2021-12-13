import "./App.css";
import Timer from "./components/Timer/index";
import Time from "./components/Time/index";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <Typography varient="text" className={classes.header}>
          POMODORO
        </Typography>
        <Time></Time>
        <br />
        <Timer></Timer>
      </header>
    </div>
  );
}

export default App;
