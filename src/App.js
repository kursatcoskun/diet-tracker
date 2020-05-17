import React from "react";
import DrawerMenu from "./components/layout/drawerMenu";
import LayoutContent from "./components/layout/layoutContent";
import { useStyles } from "./components/layout/layoutStyles";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DrawerMenu />
      <LayoutContent />
    </div>
  );
}

export default App;
