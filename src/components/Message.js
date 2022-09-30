import React from "react";

import Alert from "@mui/material/Alert";

const Message = ({ severity, variant, children }) => {
  return (
    <Alert variant={variant} severity={severity}>
      {children}
    </Alert>
  );
};

export default Message;
