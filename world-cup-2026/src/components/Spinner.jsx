import React from "react";

import classes from "./Spinner.module.css";

export default function Spinner({ className, children, ...props }) {
  return (
    <div
      className={`${classes.loader} ${className ? className : ""}`}
      {...props}
    >
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
