import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const abouts = [
    {
        img: "/frontend.png",
        title: "FRONTEND",
        info:
            "HTML, CSS, emotion, antd, Javascript, TypeScript, React, Redux, Redux-saga, Next.js",
    },
    {
        img: "/vr.png",
        title: "VR&AR",
        info: "Unity, SteamVR-Plugin, ARCore",
    },
    {
        img: "/other.png",
        title: "OTHERS",
        info: "Stm32f, Deep learning",
    },
];

const About = () => {
    const classes = useStyles();
    return (
        <>
            <section className={classes.root}>
                <Typography
                    className={classes.title}
                    component="h1"
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    About
                </Typography>

                <Container className={classes.container}>
                    <Grid container spacing={5}>
                        {abouts.map((about) => (
                            <Grid item xs={12} md={4}>
                                <div className={classes.item}>
                                    <img
                                        className={classes.image}
                                        src={about.img}
                                        alt="suitcase"
                                    />
                                    <Typography
                                        variant="h6"
                                        className={classes.title}
                                    >
                                        {about.title}
                                    </Typography>
                                    <Typography variant="h8">
                                        {about.info}
                                    </Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </section>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        // display: "flex",
        overflow: "hidden",
    },
    container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(30),
        display: "flex",
        position: "relative",
    },
    title: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(7),
    },
    item: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(0, 3),
    },
    image: {
        height: 180,
    },
    curvyLines: {
        pointerEvents: "none",
        position: "absolute",
        top: -180,
    },
}));

export default About;
