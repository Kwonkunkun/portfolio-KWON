import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SkillDetail from "./skill-detail";

const skills = [
    { type: "C++", level: 70 },
    { type: "JavaScript", level: 73 },
    { type: "TypeScirpt", level: 65 },
    { type: "Html", level: 75 },
    { type: "Css", level: 60 },
    { type: "emotion", level: 60 },
    { type: "antd", level: 60 },
    { type: "React", level: 80 },
    { type: "Redux", level: 70 },
    { type: "Redux-saga", level: 70 },
    { type: "React-query", level: 50 },
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
                <Grid container spacing={4}>
                    {/* {cards.map((card, idx) => (
                        <Grid key={idx} item sm={6} xs={12}>
                            <SkillCard key={idx} card={card} />
                        </Grid>
                    ))} */}
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
        backgroundColor: "rgba(113,175,250,0.5)",
        padding: theme.spacing(8, 0, 6),
    },
    title: {
        marginBottom: theme.spacing(10),
    },
    skillDetail: {
        marginTop: theme.spacing(3),
    },
}));

export default Skill;
