import "./app.css";
import Header from "./components/header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Canvas from "./components/canvas";
import Introduce from "./components/introduce";
import Skill from "./components/skill";
import Footer from "./components/footer";

function App() {
    return (
        <>
            <CssBaseline />
            <Header />
            <main>
                <Introduce />
                <Canvas />
                <Skill />
            </main>
            <Footer />
        </>
    );
}

export default App;
