import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const introduce = {
    greetings: "안녕하세요~😀",
    info: "다양한 분야에 관심이 많은 육각형 개발자 권건우 입니다!",
};

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
                    {introduce.greetings}
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    paragraph
                >
                    {introduce.info}
                </Typography>
                {/* <div className={classes.Button}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Get Start
                            </Button>
                        </Grid>
                    </Grid>
                </div> */}
            </Container>
        </section>
    );
};

const useStyles = makeStyles((theme) => ({
    Container: {
        backgroundColor: "rgb(255, 192, 192)",
        padding: theme.spacing(8, 0, 6),
        marginTop: theme.spacing(5),
    },
    Button: {
        marginTop: theme.spacing(4),
    },
}));

export default Introduce;
