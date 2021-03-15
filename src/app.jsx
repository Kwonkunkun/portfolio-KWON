import "./app.css";
import Header from "./components/header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Canvas from "./components/canvas";

function App() {
    return (
        <>
            <CssBaseline />
            <Header />
            <Canvas />
        </>
    );
}

export default App;
