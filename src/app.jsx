import "./app.css";
import Header from "./components/header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Canvas from "./components/canvas";
import Introduce from "./components/introduce";
import Skill from "./components/skill";
import Footer from "./components/footer";
import Project from "./components/project";
import styled from "@emotion/styled";
import ControlSlider from "./components/controlSlider";
import { useState } from "react";
import About from "./components/about";

function App() {
    const [waveAmp, setWaveAmp] = useState(100);
    return (
        <>
            <CssBaseline />
            <Header />
            <Main>
                <Introduce />
                <ControlSlider waveAmp={waveAmp} setWaveAmp={setWaveAmp} />
                <Canvas waveAmp={waveAmp} />
                <About />
                <Skill />
                <Project />
            </Main>
            <Footer />
        </>
    );
}

const Main = styled.main`
    background-color: rgb(255, 192, 192);
`;

export default App;
