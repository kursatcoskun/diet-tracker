import React from "react";
import { useStyles } from "./layoutStyles";
import Routes from "./Routes";

export default function LayoutContent() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Routes />
    </main>
  );
}
