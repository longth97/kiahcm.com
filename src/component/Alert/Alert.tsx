import MuiAlert, { AlertProps } from "@material-ui/lab/Alert/Alert";
import React from "react";

export const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};
