import React from "react";

const ToggleVisibility = ({ visible, children }) => {
  return <div style={{ display: visible ? "block" : "none" }}>{children}</div>;
};

export default ToggleVisibility;
