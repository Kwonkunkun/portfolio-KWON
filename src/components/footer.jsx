import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Thank you ~ 🙂
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
                component="p"
            ></Typography>
            {/* <Typography variant="body2" color="textSecondary" align="center">
                <Link color="inherit" href="https://github.com/Kwonkunkun">
                    <GitHubIcon />
                </Link>
            </Typography> */}
        </footer>
    );
};

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
        height: "30vh",
    },
}));

export default Footer;
