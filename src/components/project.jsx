import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ProjectCard from "./project-card";
import Typography from "@material-ui/core/Typography";

const projects = [
    {
        title: "simple_particle",
        info: "particle 효과, 비 효과를 html canvas, 바닐라js로 구현",
        img:
            "https://user-images.githubusercontent.com/59603575/103346337-0e1ae600-4ad7-11eb-8b23-e5f618819610.gif",
        gitUrl: "https://github.com/Kwonkunkun/Simple_particle",
    },
    {
        title: "youtube_clone",
        info: "Youtube api, react를 이용한 youtube 클론코딩 프로젝트",
        img:
            "https://user-images.githubusercontent.com/59603575/105004700-acb3ba80-5a77-11eb-90f5-d29bb14a529c.png",
        gitUrl: "https://github.com/Kwonkunkun/React_youtube",
    },
    {
        title: "cardmaker",
        info: "react, firebase를 이용한 카드를 만들수 있는 프로젝트",
        img:
            "https://user-images.githubusercontent.com/59603575/105945809-5400a500-60a9-11eb-96f3-7c2363c35aad.gif",
        gitUrl: "https://github.com/Kwonkunkun/React_cardmaker",
    },
    {
        title: "온고지신-국궁(VR-BowAndArrow)",
        info: "VR을 이용한 교육적 목적의 국궁 체험 시뮬레이션 콘텐츠",
        img:
            "https://user-images.githubusercontent.com/59603575/102003822-a9325400-3cbf-11eb-8367-af01291f9b33.png",
        gitUrl: "https://github.com/Kwonkunkun/VR-BowAndArrow",
    },
    {
        title: "VR-DrawAndPainting",
        info:
            "VR상에서 그림을 그려 딥러닝 모델로 판별하고 다시 VR환경에 관련 오브젝트를 띄운다. 이후, 오브젝트로 색칠하며 전시하는 프로젝트",
        img:
            "https://user-images.githubusercontent.com/59603575/102004661-a3d90780-3cc7-11eb-894c-fd19d713e5a1.png",
        gitUrl: "https://github.com/Kwonkunkun/DrawAndPainting_VR",
    },
    {
        title: "제3의 눈(AR 전시)",
        info:
            "서울문화재단 청년예술청 지원사업 - <스페이스랩:아직> 선정작품 , AR 전시 개발자로 참여, 뇌파센서와 연동하여 뇌파값에 따라 오브젝트 변화",
        img:
            "https://user-images.githubusercontent.com/59603575/102004337-9cfcc580-3cc4-11eb-93ce-d2bdaba81a20.png",
        gitUrl: "https://github.com/Kwonkunkun/AR_Exhibition",
    },
];

const Project = () => {
    const classes = useStyles();
    return (
        <section className={classes.Container}>
            <Container
                className={classes.cardGrid}
                maxWidth="md"
                component="main"
            >
                <Typography
                    className={classes.title}
                    component="h1"
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Projects
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

const useStyles = makeStyles((theme) => ({
    Container: {
        backgroundColor: "rgba(91,207,227,0.5)",
        padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    title: {
        marginBottom: theme.spacing(6),
    },
}));

export default Project;
