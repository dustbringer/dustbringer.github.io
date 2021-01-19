import React from "react";
import PropTypes from "prop-types";

export const GlobalContext = React.createContext(null);

const GlobalProvider = ({ children }) => {
  const [alertQueue, setAlertQueue] = React.useState([]);

  const store = {
    AlertQueue: [alertQueue, setAlertQueue],
    showError: (msg) => {
      setAlertQueue((q) => [
        ...q,
        {
          type: "error",
          msg,
        },
      ]);
    },
    showSuccess: (msg) => {
      setAlertQueue((q) => [
        ...q,
        {
          type: "success",
          msg,
        },
      ]);
    },
  };
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
