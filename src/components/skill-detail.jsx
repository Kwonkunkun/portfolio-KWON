import React from "react";
import SkillBar from "react-skillbars";

const skills = [
    { type: "C++", level: 85 },
    { type: "Javascript", level: 75 },
    { type: "Html", level: 75 },
    { type: "Css", level: 75 },
    { type: "React", level: 75 },
    { type: "Unity", level: 75 },
];

const SkillDetail = (props) => {
    return (
        <div>
            <SkillBar skills={skills} />
        </div>
    );
};

const colors = {
    bar: "red",
    title: {
        text: "#abc123",
        background: "#fff",
    },
};

export default SkillDetail;
