import React from "react";
import {useStyles} from "./layoutStyles";
import Routes from "./Routes";

const LayoutContent = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Routes/>
        </main>
    );
}

export default LayoutContent;
