import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { GlobalContext } from "../context/GlobalContext";

const Alerts = () => {
  const context = React.useContext(GlobalContext);
  if (!context) {
    return null;
  }

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
    setAlertQueue((q) => q.slice(1));
  };

  return (
    <>
      <Snackbar
        open={alertOpen}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={handleClose}
      >
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
