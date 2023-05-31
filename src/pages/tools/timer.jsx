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
import Container from "../../components/Container";
import { GlobalContext } from "../../context/GlobalContext";
import LoadingBar from "../../components/LoadingBar";

const sumTasks = (a) => a.reduce((acc, e) => acc + e.time, 0);

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

const SettingsContainer = styled("div")`
  margin: 0 0 10px;
`;

const ButtonSpaced = styled(Button)`
  margin: 0 3px;
`;

function TimerPage() {
  const context = React.useContext(GlobalContext);
  // const { showError, showSuccess } = context || {
  //   // Default values if context is null
  //   showError: () => {},
  //   showSuccess: () => {},
  // };
  const [startTime, setStartTime] = React.useState(null);
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

  // update starttime if changed
  React.useEffect(() => {
    if (startTime) {
      localStorage.setItem(
        "dustbringer-runsheet-timer-start",
        startTime.format()
      );
    }
    console.log("startTime changed");
  }, [startTime]);

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
        {startTime && (
          <>
            <TimerContainer>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body1">
                  <strong>Start: </strong>
                  {startTime.format("HH:mm:ss, dddd, DD MMMM YYYY")}
                </Typography>
                <Typography variant="body1">
                  <strong>End: </strong>
                  {moment(startTime)
                    .add(sumTasks(tasks), "m")
                    .format("HH:mm:ss, dddd, DD MMMM YYYY")}
                </Typography>
              </Box>

              <div>
                {tasks.map((e, i) => (
                  <TaskContainer key={e.title + i}>
                    {e.title}
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

            <Box sx={{ margin: "10px 0" }}>
              <Accordion title="Settings" expand>
                <SettingsContainer>
                  {" "}
                  <Typography variant="body1" gutterBottom>
                    <strong>Time Elapsed: </strong>
                    {(() => {
                      // total time for the tasks listed
                      const endTime = moment(startTime).add(
                        sumTasks(tasks),
                        "m"
                      );
                      const totalDuration = moment.duration(
                        endTime.diff(startTime)
                      );
                      const totalHours = parseInt(totalDuration.asHours());
                      const totalMinutes =
                        parseInt(totalDuration.asMinutes()) % 60;
                      const totalSeconds =
                        parseInt(totalDuration.asSeconds()) % 60;

                      // current should be at most the total time
                      const curDuration = moment.duration(
                        moment.min(curTime, endTime).diff(startTime)
                      );
                      const curHours = parseInt(curDuration.asHours());
                      const curMinutes = parseInt(curDuration.asMinutes()) % 60;
                      const curSeconds = parseInt(curDuration.asSeconds()) % 60;
                      return `${curHours}h ${curMinutes}m ${curSeconds}s of ${totalHours}h ${totalMinutes}m ${totalSeconds}s`;
                    })()}
                  </Typography>
                  <Typography variant="body1">Start Time</Typography>
                  <div>
                    <Select
                      title="Hours"
                      size="small"
                      value={startTime.hour()}
                      onChange={(e) =>
                        setStartTime((st) =>
                          st
                            ? moment(st).hour(e.target.value)
                            : moment().hour(e.target.value)
                        )
                      }
                      MenuProps={{ sx: { height: "400px" } }}
                    >
                      {[...Array(24)].map((_, i) => (
                        <MenuItem value={i} key={i}>
                          {i < 10 ? `0${i}` : i}
                        </MenuItem>
                      ))}
                    </Select>{" "}
                    :{" "}
                    <Select
                      title="Minutes"
                      size="small"
                      value={startTime.minute()}
                      onChange={(e) =>
                        setStartTime((st) =>
                          st
                            ? moment(st).minute(e.target.value)
                            : moment().minute(e.target.value)
                        )
                      }
                      MenuProps={{ sx: { height: "400px" } }}
                    >
                      {[...Array(60)].map((_, i) => (
                        <MenuItem value={i} key={i}>
                          {i < 10 ? `0${i}` : i}
                        </MenuItem>
                      ))}
                    </Select>{" "}
                    :{" "}
                    <Select
                      title="Seconds"
                      size="small"
                      value={startTime.second()}
                      onChange={(e) =>
                        setStartTime((st) =>
                          st
                            ? moment(st).second(e.target.value)
                            : moment().second(e.target.value)
                        )
                      }
                      MenuProps={{ sx: { height: "400px" } }}
                      sx={{ marginRight: "3px" }}
                    >
                      {[...Array(60)].map((_, i) => (
                        <MenuItem value={i} key={i}>
                          {i < 10 ? `0${i}` : i}
                        </MenuItem>
                      ))}
                    </Select>
                    <ButtonSpaced
                      variant="contained"
                      disableRipple
                      title="Set start to now"
                      onClick={() => setStartTime((st) => moment())}
                    >
                      Now
                    </ButtonSpaced>
                    <ButtonSpaced
                      variant="contained"
                      disableRipple
                      title="Set start backward one day"
                      onClick={() =>
                        setStartTime((st) => moment(st).subtract(1, "d"))
                      }
                    >
                      Day -
                    </ButtonSpaced>
                    <ButtonSpaced
                      variant="contained"
                      disableRipple
                      title="Set start forward one day"
                      onClick={() =>
                        setStartTime((st) => moment(st).add(1, "d"))
                      }
                    >
                      Day +
                    </ButtonSpaced>
                  </div>
                </SettingsContainer>
                <SettingsContainer>
                  <Typography variant="body1">Tasks</Typography>
                  <TextField
                    helperText="Format: [minutes],[title] separated by new lines."
                    // placeholder="In the format [minutes],[title] and separated by new lines."
                    title="Format: [minutes],[title] separated by new lines."
                    rows={10}
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
                </SettingsContainer>
              </Accordion>
            </Box>
          </>
        )}
      </Container>
    </>
  );
}

export default TimerPage;
