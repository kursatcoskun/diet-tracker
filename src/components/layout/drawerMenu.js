import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {MenuBook} from "@material-ui/icons";
import {useStyles} from "./layoutStyles";
import {Link} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as layoutActions from '../../redux/actions/layoutActions';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import {MenuItems} from "./menuItem";

const DrawerMenu = (props) => {
    const classes = useStyles();
    const drawerIsOpen = useSelector(state => state.layout.drawerIsOpen);

    const handleDrawer = () => {
        if (drawerIsOpen) {
            props.actions.drawerHideOpen(false);
        } else {
            props.actions.drawerHideOpen(true);
        }
    };

    return (
        <>
            <CssBaseline/>
            <AppBar
                position="fixed"
                style={{zIndex: 1201}}
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: drawerIsOpen,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawer}
                        edge="start"
                        className={clsx(classes.menuButton, {})}
                    >
                        {!drawerIsOpen ? <MenuIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Diet Tracker App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: drawerIsOpen,
                    [classes.drawerClose]: !drawerIsOpen,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: drawerIsOpen,
                        [classes.drawerClose]: !drawerIsOpen,
                    }),
                }}
            >
                <div className={classes.toolbar}>

                </div>
                <Divider/>
                <List>
                    {MenuItems.map((data) => (
                        <Link to={data.route} key={data.text}>
                            <ListItem key={data.text}>
                                <ListItemIcon>
                                    <MenuBook/>
                                </ListItemIcon>
                                <ListItemText primary={data.text}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

DrawerMenu.propTypes = {
    actions: PropTypes.object.isRequired,
};


const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            drawerHideOpen: bindActionCreators(layoutActions.DrawerHideOpen, dispatch),
        },
    };
};

export default connect(null, mapDispatchToProps)(DrawerMenu);
