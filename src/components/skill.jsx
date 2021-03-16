import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SkillCard from "./skill-card";
import Grid from "@material-ui/core/Grid";
import SkillDetail from "./skill-detail";

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
                    <Grid item sm={6} xs={12}>
                        <SkillCard />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <SkillCard />
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <SkillDetail />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

const useStyles = makeStyles((theme) => ({
    Container: {
        backgroundColor: theme.palette.background.paper,
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
