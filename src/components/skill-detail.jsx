import React from "react";
import SkillBar from "react-skillbars";

const SkillDetail = ({ skills }) => {
    return (
        <div>
            <SkillBar colors={colors} skills={skills} />
        </div>
    );
};

const colors = {
    bar: "rgba(91,207,227,0.5)",
    title: {
        text: "rgb(91,97,227)",
        background: "rgba(102,255,212,0.5)",
    },
};

export default SkillDetail;
