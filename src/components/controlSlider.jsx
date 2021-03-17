import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

function valuetext(value) {
    return `${value}°C`;
}

const ControlSlider = ({ setWaveAmp }) => {
    const classes = useStyles();

    const onChange = (event, value) => {
        console.log(value);
        setWaveAmp(value);
    };

    return (
        <div className={classes.root}>
            <Typography gutterBottom>Wave Amplitude</Typography>
            <Slider
                onChangeCommitted={onChange}
                defaultValue={100}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={100}
                marks
                min={0}
                max={400}
            />
        </div>
    );
};

const useStyles = makeStyles({
    root: {
        color: "gray",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        padding: "1rem",
    },
});

export default ControlSlider;
