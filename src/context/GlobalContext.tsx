import React from "react";
import PropTypes from "prop-types";

export const GlobalContext = React.createContext(null);

function GlobalProvider({ children }) {
  const [alertQueue, setAlertQueue] = React.useState([]);
  const [mdHeadings, setMdHeadings] = React.useState([]);
  const addMdHeading = (text, depth, ref) =>
    setMdHeadings((h) => [
      ...h,
      {
        text,
        depth,
        ref,
      },
    ]);

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
    MdHeadings: [mdHeadings, setMdHeadings],
    addMdHeading,
  };

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
