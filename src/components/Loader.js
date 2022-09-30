import React from "react";

import CircularProgress from "@mui/material/CircularProgress";

const Loader = ({ color, size }) => {
  return <CircularProgress size={size} color={color} />;
};

export default Loader;
