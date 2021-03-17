import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ComputerIcon from "@material-ui/icons/Computer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ControlSlider from "./controlSlider";
import Box from "@material-ui/core/Box";

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.header} position="blocked">
            <Toolbar>
                <ComputerIcon className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap>
                    KUNWOO KWON
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "rgb(113,175,250)",
    },
    icon: {
        marginRight: theme.spacing(2),
    },
}));

export default Header;
