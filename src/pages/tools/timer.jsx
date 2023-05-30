import React from "react";
import { styled } from "@mui/material/styles";
import { Helmet } from "react-helmet";
import moment from "moment";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

import Accordion from "../../components/Accordion";
import Code from "../../components/Markdown/Code";
import Container from "../../components/Container";
import ListItem from "../../components/Markdown/ListItem";
import { GlobalContext } from "../../context/GlobalContext";
import LoadingBar from "../../components/LoadingBar";

const sumTasks = (a) => a.reduce((acc, e) => acc + e.time, 0);
const createTask = (title, time) => ({ title, time });

const trimDecimal = (d, places) => {
  if (places <= 0) return Math.floor(d);
  else return Math.floor(d * Math.pow(10, places)) / Math.pow(10, places);
};

const TimerContainer = styled("div")`
  outline: 1px solid grey;
  border-radius: 3px;
  padding: 15px;
`;

const TaskContainer = styled("div")`
  margin: 10px 0;
`;

function TimerPage() {
  const context = React.useContext(GlobalContext);
  // const { showError, showSuccess } = context || {
  //   // Default values if context is null
  //   showError: () => {},
  //   showSuccess: () => {},
  // };
  const [startTime, setStartTime] = React.useState(moment());
  const [curTime, setCurTime] = React.useState(moment());
  const [tasks, setTasks] = React.useState([]);
  const [settings, setSettings] = React.useState("");

  const onSetTasks = (e) => {
    e.preventDefault();
    const newTasks = settings
      .trim()
      .split(/\r?\n/)
      .map((e) => e.match(/^(\d*\.\d+|\d+\.?),(.*)$/)) // get number,title
      .filter((e) => e) // remove non-matches
      .map((e) => ({ title: e[2].trim(), time: parseFloat(e[1]) })); // get number,title;
    setTasks(newTasks);

    localStorage.setItem(
      "dustbringer-runsheet-timer-tasks",
      JSON.stringify(newTasks)
    );
    localStorage.setItem("dustbringer-runsheet-timer-settings", settings);
  };

  const onSetHour = (e) => {
    setStartTime((st) =>
      st ? st.hour(e.target.value) : moment().hour(e.target.value)
    );
    localStorage.setItem(
      "dustbringer-runsheet-timer-start",
      startTime.format()
    );
  };
  const onSetMinute = (e) => {
    setStartTime((st) =>
      st ? st.minute(e.target.value) : moment().minute(e.target.value)
    );
    localStorage.setItem(
      "dustbringer-runsheet-timer-start",
      startTime.format()
    );
  };
  const onSetSecond = (e) => {
    setStartTime((st) =>
      st ? st.second(e.target.value) : moment().second(e.target.value)
    );
    localStorage.setItem(
      "dustbringer-runsheet-timer-start",
      startTime.format()
    );
  };

  // Timer tick
  React.useEffect(() => {
    const timer = setInterval(() => setCurTime(moment()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Load any saved file contents
  React.useEffect(() => {
    const savedTasks = localStorage.getItem("dustbringer-runsheet-timer-tasks");
    const savedSettings = localStorage.getItem(
      "dustbringer-runsheet-timer-settings"
    );
    const savedStartTime = localStorage.getItem(
      "dustbringer-runsheet-timer-start"
    );
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    if (savedStartTime) setStartTime(moment(savedStartTime));
    if (savedSettings) setSettings(savedSettings);
  }, []);

  return (
    <>
      <Helmet>
        <title>Runsheet Timer | dustbringer.github.io</title>
        <meta name="description" content="Runsheet Timer" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4">Runsheet Timer</Typography>
        <Typography variant="body1" gutterBottom>
          Keep track of a schedule.
        </Typography>
        <TimerContainer>
          <Typography variant="body1">Start: {startTime.format()}</Typography>
          <br />
          <Typography variant="body1">
            Current time: {curTime.format()}
          </Typography>
          <br />
          <Typography variant="body1">
            Time elapsed since start: {curTime.diff(startTime, "seconds")}
          </Typography>
          <br />
          <Typography variant="body1">
            {curTime.diff(startTime, "minutes")} of {sumTasks(tasks)}
          </Typography>
          <div>
            Tasks
            {tasks.map((e, i) => (
              <TaskContainer key={e.title + i}>
                Title: {e.title}, time:{e.time}
                <LoadingBar
                  cur={curTime.diff(
                    moment(startTime).add(sumTasks(tasks.slice(0, i)), "m"),
                    "seconds"
                  )}
                  max={e.time * 60}
                  dispCur={curTime.diff(
                    moment(startTime).add(sumTasks(tasks.slice(0, i)), "m"),
                    "minutes"
                  )}
                  dispMax={trimDecimal(e.time, 2)}
                />
              </TaskContainer>
            ))}
          </div>
        </TimerContainer>
        <div>
          <div>
            <Select
              label="Hour"
              size="small"
              value={startTime.hour()}
              onChange={onSetHour}
              MenuProps={{ sx: { height: "500px" } }}
            >
              {[...Array(24)].map((_, i) => (
                <MenuItem value={i} key={i}>
                  {i < 10 ? `0${i}` : i}
                </MenuItem>
              ))}
            </Select>{" "}
            :
            <Select
              label="Minute"
              size="small"
              value={startTime.minute()}
              onChange={onSetMinute}
              MenuProps={{ sx: { height: "500px" } }}
            >
              {[...Array(60)].map((_, i) => (
                <MenuItem value={i} key={i}>
                  {i < 10 ? `0${i}` : i}
                </MenuItem>
              ))}
            </Select>
            :
            <Select
              label="Second"
              size="small"
              value={startTime.second()}
              onChange={onSetSecond}
              MenuProps={{ sx: { height: "500px" } }}
            >
              {[...Array(60)].map((_, i) => (
                <MenuItem value={i} key={i}>
                  {i < 10 ? `0${i}` : i}
                </MenuItem>
              ))}
            </Select>
            <Button
              variant="contained"
              disableRipple
              title="Now"
              onClick={() => setStartTime(moment())}
            >
              Now
            </Button>
            <Button
              variant="contained"
              disableRipple
              title="Now"
              onClick={() => setStartTime((st) => st.subtract(1, "d"))}
            >
              Day-
            </Button>
            <Button
              variant="contained"
              disableRipple
              title="Now"
              onClick={() => setStartTime((st) => st.add(1, "d"))}
            >
              Day+
            </Button>
          </div>
          <TextField
            label="Tasks"
            rows={6}
            multiline
            margin="dense"
            size="small"
            fullWidth
            variant="outlined"
            inputProps={{
              style: {
                fontFamily: "Roboto Mono",
              },
            }}
            value={settings}
            onChange={(e) => setSettings(e.target.value)}
          />
          <Button
            variant="contained"
            disableRipple
            title="Set"
            onClick={onSetTasks}
          >
            <DirectionsRunIcon />
          </Button>
        </div>
      </Container>
    </>
  );
}

export default TimerPage;
