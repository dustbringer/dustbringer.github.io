import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { GlobalContext } from "../GlobalContext";

const Alerts = () => {
  const context = React.useContext(GlobalContext);
  const { AlertQueue } = context;
  const [alertQueue, setAlertQueue] = AlertQueue;
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState("No message!");
  const [alertType, setAlertType] = React.useState("error");

  const setAlert = (alert) => {
    setAlertType(alert.type);
    setAlertMsg(alert.msg);
  };

  React.useEffect(() => {
    if (alertQueue && alertQueue.length !== 0) {
      setAlert(alertQueue[0]);
      setAlertOpen(true);
    }
  }, [alertQueue]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setAlertOpen(() => false);
    setAlertQueue(q => q.slice(1));
  };

  return (
    <>
      <Snackbar open={alertOpen} autoHideDuration={2000} onClose={handleClose}>
        <MuiAlert
          elevation={5}
          variant="filled"
          onClose={handleClose}
          severity={alertType}
        >
          {alertMsg}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default Alerts;
