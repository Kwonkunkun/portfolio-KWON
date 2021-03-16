import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SkillCard from "./skill-card";
import Grid from "@material-ui/core/Grid";
import SkillDetail from "./skill-detail";

const skills = [
    { type: "C++", level: 85 },
    { type: "Javascript", level: 75 },
    { type: "Html", level: 75 },
    { type: "Css", level: 75 },
    { type: "React", level: 75 },
    { type: "Unity", level: 75 },
];

const cards = [
    { title: "Frontend", img: "/Frontend.png" },
    { title: "VR & AR", img: "/VR.jpeg" },
];

const Skill = () => {
    const classes = useStyles();
    return (
        <section className={classes.Container}>
            <Container maxWidth="sm" component="main">
                <Typography
                    className={classes.title}
                    component="h1"
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Skills
                </Typography>
                <Grid container spacing={10}>
                    {cards.map((card, idx) => (
                        <Grid key={idx} item sm={6} xs={12}>
                            <SkillCard key={idx} card={card} />
                        </Grid>
                    ))}
                    <Grid item sm={12} xs={12}>
                        <SkillDetail skills={skills} />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

const useStyles = makeStyles((theme) => ({
    Container: {
        // backgroundColor: "rgba(113,175,250,0.5)",
        padding: theme.spacing(8, 0, 6),
    },
    title: {
        marginBottom: theme.spacing(6),
    },
    skillDetail: {
        marginTop: theme.spacing(3),
    },
}));

export default Skill;
