import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const Introduce = () => {
    const classes = useStyles();
    return (
        <section className={classes.Container}>
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Hi there~😀
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    paragraph
                >
                    Something short and leading about the collection below—its
                    contents, the creator, etc. Make it short and sweet, but not
                    too short so folks don&apos;t simply skip over it entirely.
                </Typography>
                <div className={classes.Button}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Get Start
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </section>
    );
};

const useStyles = makeStyles((theme) => ({
    Container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    Button: {
        marginTop: theme.spacing(4),
    },
}));

export default Introduce;
