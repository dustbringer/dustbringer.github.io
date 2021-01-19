import React from "react";
import PropTypes from "prop-types";

export const GlobalContext = React.createContext(null);

const GlobalProvider = ({ children }) => {
  const store = {};

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
