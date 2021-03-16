import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const SkillCard = ({ card }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title={card.title} />
            <CardMedia
                className={classes.media}
                image={card.img}
                title="Paella dish"
            />
            <CardContent>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                ></Typography>
            </CardContent>
        </Card>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: "auto",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
}));

export default SkillCard;
